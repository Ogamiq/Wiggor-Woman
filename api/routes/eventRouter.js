const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require ('bcryptjs');
const mongoose = require('mongoose');
const eventModel = require('../models/kzwEvent');
const Event = mongoose.model('kzwEvent');
const jwt = require('jsonwebtoken');
const R = require('ramda');
const {isAuthentic} = require("../controllers/userController");
const {isAdmin} = require("../controllers/userController");


//gets the list of all of the events
router.get('/event', function(req, res){
  Event
       .find({},{__v: 0})
      .lean()
       .exec(function(err, events){
         if(err){
         console.log("Error finding");
         res.status(500).json(err);
       }
       else{
        events = R.map(e => {
          let leftSpots = e.spots - e.userIDs.length;
          e.leftSpots = leftSpots;
          return e;
        })(events)
        res.status(200).json(events);
        };
      });
    });

//creates a new event
router.post('/event',isAuthentic, isAdmin, (req, res) => {
  let name = req.body.name;
  let room = req.body.room;
  let speaker= req.body.speaker;
  let building= req.body.building;
  let date = req.body.date;
  let hour = req.body.hour;
  let description = req.body.description;
  let spots = req.body.spots;

  req.checkBody('name').notEmpty();
  req.checkBody('room').optional();;
  req.checkBody('speaker').optional();
  req.checkBody('building').notEmpty();
  req.checkBody('date').notEmpty();
  req.checkBody('hour').notEmpty();
  req.checkBody('description').notEmpty();
  req.checkBody('spots').toInt().notEmpty();

  let errors = req.validationErrors();
  if (errors){
    console.log(errors);
    res.status(500)
      .json(errors);
  } else {
  let newEvent = new Event({
    name,
    room,
    speaker,
    building,
    date,
    hour,
    description,
    spots
  });
  newEvent.save((err, result) => {
    res.status(200).json({success:true, result})
  })
}
});

//modifies an event
router.put('/event/:id',isAuthentic, isAdmin, (req, res) => {
  const id = req.params.id;
  req.checkBody('name').optional();
  req.checkBody('room').optional();;
  req.checkBody('speaker').optional();
  req.checkBody('building').optional();
  req.checkBody('date').optional();
  req.checkBody('hour').optional();
  req.checkBody('description').optional();
  req.checkBody('spots').toInt().optional();

  let errors = req.validationErrors();
  if (errors){
    console.log(errors);
    res.status(500).json(errors);
  } else {

    let fieldsToChange = {};
    if(req.body.name) fieldsToChange.name = req.body.name;
    if(req.body.room) fieldsToChange.room = req.body.room;
    if(req.body.speaker) fieldsToChange.speaker = req.body.speaker;
    if(req.body.building) fieldsToChange.building = req.body.building;
    if(req.body.date) fieldsToChange.date = req.body.date;
    if(req.body.hour) fieldsToChange.hour = req.body.hour;
    if(req.body.description) fieldsToChange.description = req.body.description;
    if(req.body.spots) fieldsToChange.pplLimit = req.body.spots;

    Event.findByIdAndUpdate(id, {
      $set: fieldsToChange
    }, (err, result) => {
      if(err) {
        res.status(400).json({ success: false, error: err})
      } else {
        res.status(200).json({ success: true, message: "event sucessfully updated"})
      }
    })
  }
});

//deletes an event
router.delete('/event/:eventID', isAuthentic, isAdmin, (req, res) => {
  const id = req.params.eventID;

  Event
      .findByIdAndRemove(id)
      .exec(function(err, EvenT){
        if (err){
          console.log("Event was not found");
          res.status(404).json(err);
        }
        else{
          res.status(200).json({success:true, message:"event deleted"});
        }
      });
});

module.exports = router;
