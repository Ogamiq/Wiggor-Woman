const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var User = mongoose.model('User');
const CONFIG = require('../data/config.js');

//Checks if the token exists in a header authorization and verifies it
//Calls next middleware if the token is correct, if not sends status forbidden.
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

    try {
      const decoded = jwt.verify(req.token, CONFIG.HASH_PASSWORD_SECRET);
      console.log(decoded);
      next();
    } catch(err) {
      res.sendStatus(403);
    }

  } else {
    // Forbidden
    res.sendStatus(403);
  }
};
