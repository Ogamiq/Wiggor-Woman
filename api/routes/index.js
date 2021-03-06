const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require ('bcryptjs');
const mongoose = require('mongoose');
const userModel = require('../models/user.js');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const CONFIG = require('../data/config.js');


router.post('/login', function(req, res){
  var email = req.body.email;
  var password = req.body.password;

  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();

  User.findOne({
    email
  }).exec(function(err, user){
    if (err){
      console.log(err);
      res.status(400).json(err);
    }
     if(user) {
      if (bcrypt.compareSync(password, user.password)){
        jwt.sign({ id: user._id, name: user.name }, CONFIG.HASH_PASSWORD_SECRET, { expiresIn: '900000s' },  (err, token) => {
        res.status(200)
          .json({user,token})
        });
    }
    else {
     res.status(200).json({sucess: false, message: 'wrong data provided, cannot log in'});
   }
 } else {
   res.status(200).json({success: false, message: "wrong data provided, cannot log in"})
 }
});
});

router.post('/register', function(req, res){
  var name = req.body.name;
  var surname = req.body.surname;
  var university = req.body.university;
  var year_of_study = req.body.year_of_study;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;
  var isAdmin=req.body.isAdmin;

  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('surname', 'Surname is required').notEmpty();
  req.checkBody('university').notEmpty();
  req.checkBody('year_of_study').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  req.checkBody('isAdmin').optional();

  let errors = req.validationErrors();
  if (errors){
    console.log(errors);
    res.status(500)
      .json(errors);
  } else {
   User.findOne({
    email:email
  }).exec(function(err, user){
    if (err){
      console.log(err);
      res.status(400).json('error registering the user');
    }
     if(user) {
       res.status(200).json('the user with that email is already registered');
  } if (!user){
    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(password, salt, function(error, hash){
        if(err){
          console.log(err);
          }
          let newUser = new User({
          name,
          surname,
          university,
          year_of_study,
          email,
          password:hash
          });
          newUser.save(function(err, result){
            if(error){
              console.log(err);
              return;
            } else {
              res.json(result)
                 //TODO: redirect to the login view when it's made.
                 //.redirect('../public/login.html');
          }
        });
      })
    });
  }
});
  }
});

module.exports = router;
