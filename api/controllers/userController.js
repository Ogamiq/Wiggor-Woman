const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var User = mongoose.model('User');
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
    console.log(req.headers);
    if (!bearerToken) res.json({success: false, message: "couldn't find the token in authorization"});
    try {
        const decoded = jwt.verify(bearerToken, CONFIG.HASH_PASSWORD_SECRET);
        console.log(decoded);
        console.log(decoded.id);
        User
            .findById(decoded.id)
            .exec( function(err, user){
                if (err) res.json({success:false, message: "error finding user"});
                else if (!user) res.json({success:false, message:"user not found in the database"});
                else next();
            });
    }
    catch (err) {
        res.sendStatus(403);
    }
};


// module.exports.isAdmin = (req,res,next) => {
//
// };


//Checks if the token exists in a header authorization and verifies it
//Calls next middleware if the token is correct, if not sends status forbidden.
//module.exports.authenticateUser = (req,res,next) => {
  // // Get auth header value
  // const bearerHeader = req.headers['Authorization'];
  // // Check if bearer is undefined
  // if(typeof bearerHeader !== 'undefined') {
  //   // Split at the space
  //   const bearer = bearerHeader.split(' ');
  //   // Get token from array
  //   const bearerToken = bearer[1];
  //   // Set the token
  //   req.token = bearerToken;
    // console.log("at least entered this function");
    // console.log(req);
    // console.log(res);
    // next();
    //

  //   try {
  //     const decoded = jwt.verify(req.token, CONFIG.HASH_PASSWORD_SECRET);
  //     console.log(decoded);
  //     next();
  //   } catch(err) {
  //     res.sendStatus(403);
  //   }
  //
  // } else {
  //   // Forbidden
  //   res.sendStatus(403);
  // }
//};
