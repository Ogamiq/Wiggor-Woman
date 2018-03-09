const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var User = mongoose.model('User');

/*module.exports.authenticate = function(req, res, next){
console.log('token');
  var headerExists=req.headers.authorization;
  if (headerExists) {
    var token = req.headers.authorization.split(' ')[1]; //Authorization Bearer xxx
    jwt.verify(token, 's3cr3t', function(error, decoded){
      if (error){
        console.log(error);
        res.status(401).json('Unauthorized');
      }else {
        console.log('nu i cho tam?');
        req.user = decoded.username;
        next();
      }
    });
  }else{
    res.status(403).json('No token provided');
  }
};*/

// module.exports.verify_user = function(token, hash){
//   var decoded = jwt.verify(token, hash);
//     if(User.findById(decoded.id)){
//       return true;
//     }
//     else {
//       return false;
//     }  };


module.exports.verify_token = (req,res,next) => {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
};
