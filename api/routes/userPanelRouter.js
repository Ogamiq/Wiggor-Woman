const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../models/user');
const kzwEventModel = require('../models/kzwEvent');
const User = mongoose.model('User');
const {isAuthentic} = require("../controllers/userController");
const R = require('ramda');


//based on the userID gets all of the events that the user subscribes
router.get('/user/:userID', isAuthentic, (req, res) => {
  let userID = req.params.userID;
  User.aggregate([
    {$match: {_id: new mongoose.mongo.ObjectId(userID)}},
    {$lookup:
      {
        from: 'kzwEvent',
        localField: 'eventIDs',
        foreignField: '_id',
        as: 'userEvents'
      }
    },
    ],(err,result) => {

      let userEvents = result[0].userEvents;
      userEvents = R.map(e => {
      let leftSpots = e.pplLimit - e.userIDs.length;
      e.leftSpots = leftSpots;
      return e;
      })(userEvents)
      res.status(200).json(userEvents);
    });
});


//modify the user properties
router.put('/user/:id', isAuthentic, (req, res) => {
  const id = req.params.id;

  req.checkBody('name').optional();
  req.checkBody('surname').optional();
  req.checkBody('university').optional();
  req.checkBody('year_of_study').optional();
  req.checkBody('email').optional();
  req.checkBody('password').optional();
  req.checkBody('isAdmin').optional();

  let errors = req.validationErrors();
  if (errors){
    console.log(errors);
    res.status(500).json(errors);
  } else {

    let fieldsToChange = {};
    if(req.body.name) fieldsToChange.name = req.body.name;
    if(req.body.surname) fieldsToChange.surname = req.body.surname;
    if(req.body.university) fieldsToChange.university = req.body.university;
    if(req.body.year_of_study) fieldsToChange.year_of_study = req.body.year_of_study;
    if(req.body.date) fieldsToChange.password = req.body.password;
    if(req.body.hour) fieldsToChange.email = req.body.email;
    if(req.body.hour) fieldsToChange.isAdmin = req.body.isAdmin;

    User.findByIdAndUpdate(id, {
      $set: fieldsToChange
    }, (err, result) => {
      if(err) {
        res.status(400).json({ success: false, error: err})
      } else {
        res.status(200).json({ success: true, message: "user sucessfully updated"})
      }
    })
  }
});

module.exports = router;
