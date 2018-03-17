const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require ('bcryptjs');
const mongoose = require('mongoose');
var Event = require('../models/kzwEvent');
var Event = mongoose.model('kzwEvent');
const jwt = require('jsonwebtoken');


//returns all of the events.
router.get('/event', function(req, res){
  Event
       .find()
       .select("-_id, -__v")
       .exec(function(err, events){
         if(err){
         console.log("Error finding");
         res
            .status(500)
            .json(err);
       }
       else{
        console.log("Found events", events.length);
        res
          .status(500)
          .json(events);
        };
      });
    });

router.post('/event',(req, res) => {
  let name = req.body.name;
  let room = req.body.room;
  let speaker= req.body.speaker;
  let building= req.body.building;
  let date = req.body.date;
  let hour = req.body.hour;
  let description = req.body.description;
  let pplLimit = req.body.ppLimit;
  let pplRegistered = 0;
  let participants = [];


  req.checkBody('name').notEmpty();
  req.checkBody('room').optional();;
  req.checkBody('speaker').optional();
  req.checkBody('building').notEmpty();
  req.checkBody('date').notEmpty();
  req.checkBody('hour').notEmpty();
  req.checkBody('description').notEmpty();
  req.checkBody('ppLimit').toInt().notEmpty();

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
    pplLimit,
    pplRegistered,
    participants,
  });
  newEvent.save((err, result) => {
    console.log(result);
    res.status(200)
       .json({success:true, result})
  })
}
});

router.put('/event/:id',/*ctrl_users.verify_token, */function(req, res){
  const id = req.params.id;
  req.checkBody('name').optional();
  req.checkBody('room').optional();;
  req.checkBody('speaker').optional();
  req.checkBody('building').optional();
  req.checkBody('date').optional();
  req.checkBody('hour').optional();
  req.checkBody('description').optional();
  req.checkBody('ppLimit').toInt().optional(); //do not use mental shortcuts peopleLimit
  req.checkBody('pplRegistered').toInt().optional();
  req.checkBody('participants').optional();

  let errors = req.validationErrors();
  if (errors){
    console.log(errors);
    res.status(500)
      .json(errors);
  } else { //here I will create new object with optional fields,,,, hmm this situation you can solve in many ways, I will show you 1:)

    let fieldsToChange = {};
    if(req.body.name) fieldsToChange.name = req.body.name;
    if(req.body.room) fieldsToChange.room = req.body.room;
    if(req.body.speaker) fieldsToChange.speaker = req.body.speaker;
    if(req.body.building) fieldsToChange.building = req.body.building;
    if(req.body.date) fieldsToChange.date = req.body.date;
    if(req.body.hour) fieldsToChange.hour = req.body.hour;
    if(req.body.description) fieldsToChange.description = req.body.description;
    if(req.body.pplLimit) fieldsToChange.pplLimit = req.body.pplLimit;
    if(req.body.pplRegistered) fieldsToChange.pplRegistered = req.body.pplRegistered;
    if(req.body.participants) fieldsToChange.participants - req.body.participants;
    console.log(fieldsToChange);
    Event.findByIdAndUpdate(id, {
      $set: fieldsToChange
    }, (err, result) => {
      if(err) {
        res.status(400).json({ success: false, error: err})
      } else {
        res.status(200).json({ success: true, result})
      }
    })
  }
});

router.delete('/event/:EventId', (req, res) => {
  const id = req.params.EventId;
  console.log(id);
  Event
      .findByIdAndRemove(id)
      .exec(function(err, EvenT){
        if (err){
          console.log("Event was not found");
          res.status(404)
             .json(err);
        }
        else{
          console.log("Event to delete was found", id);
          res.status(204)
            .json({success:true, EvenT});
        }
      });
  });

module.exports = router;
