const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const userModel = require('../models/user');
const User = mongoose.model('User');
const CONFIG = require('../data/config.js');


module.exports.isSubscribing = (array, id) => {
  var flag=false;
  var i=0;
  while(i<=array.length){
    if(String(array[i])===String(id)){
      flag=true;
      break;
    }else {
      i++;
       }
    }
return flag;
};


module.exports.isAuthentic = (req,res,next) => {
  const bearerToken = req.headers['authorization'];
  if (!bearerToken) res.json({success: false, message: "couldn't find the token in authorization"});
  try {
    const decoded = jwt.verify(bearerToken, CONFIG.HASH_PASSWORD_SECRET);
    User
      .findById(decoded.id)
      .exec( function(err, user){
        if (err) res.json({success:false, message: "error finding user"});
        else if (!user) res.json({success:false, message:"user not found in the database"});
        else {
          req.body.isAdmin = user.isAdmin;
          next();
        }
       });
  }
  catch (err) {
    res.sendStatus(403);
  }
};


module.exports.isAdmin = (req,res,next) => {
  let isAdmin = req.body.isAdmin;
  if(isAdmin == null) res.json({success:false, message:"couldn't get the information weather the user is admin or not"});
  if(!isAdmin) res.json({success:false, message: "user is not an admin so he is not authorized to take that action"})
  if(isAdmin) next();
};
