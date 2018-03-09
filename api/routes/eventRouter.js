const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require ('bcryptjs');
const mongoose = require('mongoose');
var Event = require('../models/kzw_event');
var Event = mongoose.model('kzw_events');
const jwt = require('jsonwebtoken');
const ctrl_users = require('../controllers/ctrl_users');

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

router.post('/event',ctrl_users.verify_token, (req, res) => {
  let name = req.body.name;
  let room = req.body.room;
  let speaker= req.body.speaker;
  let building= req.body.building;
  let date = req.body.date;
  let hour = req.body.hour;
  let description = req.body.description;
  let pplLimit = req.body.ppLimit;
  let pplRegistered = req.body.pplRegistered;

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
  });
  newEvent.save((err, result) => {
    res.status(200).json({success:true, result})
  })
})

router.put('/event/:id',ctrl_users.verify_token, function(req, res){
  const id = req.params.id;
      console.log('GET eventlId', id);
      Event
      .findById(id)
      //.select("-participants")
      .exec(function(err, doc){
        var response = {
          status : 200,
          message : doc
        };
        if (err) {
          console.log("Error finding event");
          response.status = 500;
          response.message = err;
        } else if(!doc) {
          console.log("EventId not found in database", id);
          response.status = 404;
          response.message = {
            "message" : "Event ID not found " + id
          };
        }
        if(response.status!==200){
          res.status(response.status)
            .json(response.message);
        } else {
          doc.name = req.body.name;
          doc.room =req.body.room;
          doc.speacker = req.body.speacker;
          doc.building=req.body.building;
          doc.date = req.body.date;
          doc.hour= req.body.hour;
          doc.description = req.body.description;
          doc.ppLimit= req.body.ppLimit;
          doc.pplRegistered = req.body.pplRegistered;
          doc.participants = req.body.participants;
        ;
        doc.save(function(err, eventUpdated){
          if (err){
            res.status(500)
               .json(err);
          }else{
            console.log(eventUpdated);
            res.status(200)
               .json(eventUpdated);
          }
        });
      }
    });
});

router.delete('/event/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  new Event({
    name: 'fff'
  }).save((err, result) => {
    res.status(200).json({success:true, result})
  })
})

module.exports = router;
