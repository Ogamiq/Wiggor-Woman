const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../models/user');
const User = mongoose.model('User');
const kzwEventModel = require('../models/kzwEvent');
const Event = mongoose.model('kzwEvent');
const tokenController = require('../controllers/tokenController');


// gets the list of participants signed into a particular event
router.get('/event/:EventID', function(req, res){
  var id=req.params.EventId;
  console.log('GET the EventID', id);
  Event
       .findById(id)
       .select('participants')
        .exec( function(err, doc){
          if (err){
            console.log(err);
            res
               .status(500)
               .json(err);
          } else {
                res
                  .status(200)
                  .json(doc);
              }});
});


//adds a user to the array of participants of a particular event
router.post('/event/:eventID/:userID', function(req, res){
  var eventID = req.params.eventID;
  var userID = req.params.userID;
  User
     .findById(userID)
     .exec(function(err, user){
      if (err){
         console.log(err);
         res.status(400).json("couldn't find the user by its id");
       }
      else{
        Event
           .findById(eventID)
           .exec(function(err, event){
            if (err){
              console.log(err);
              res.status(400).json("couldn't find the event by its id");
            }
             if (event && !event.participants.find((element) => element.name===user.name)){
                 event.participants.push({
                    name: user.name,
                    surname:user.surname,
                    university:user.university,
                    year_of_study:user.year_of_study,
                    email:user.email,
                    password:user.password
               });
            event.save((err, evUpdated)=>{
              if(err){
                console.log(err);
                res.status(500).json(err);
              } else {
                res.status(200).json(evUpdated.participants[evUpdated.participants.length-1]);
              }
            });
            }else {
              res.status(404).json('You have been already signed for this event!');
            }
          });
      }
    })
});


//removes the user from the event
router.delete('/event/:eventID/:userID', function(req, res){
    var eventID = req.params.eventID;
    var userID = req.params.userID;
    console.log('GET the eventID ', eventID);
    console.log(userID);
    Event
      .findById(req.params.eventID)
      .select()
      .exec( function(err, ev){
          if(err) {
          console.log("Error finding event 500");
          console.log(err);
          res.status(500).json({success:false, error:err});
          }
             else if (!ev) {
             console.log("Error finding event 404");
             res.status(404).json({success:false, message: "Event ID is not found in database "});
          }
              if (ev){
                 UserID = ev.participants.id(userID);
                 if(!UserID){
                    res.status(404).json({success:false, message: "UserID is not found in database "});
                 } else{
                    ev.participants.id(userID).remove();
                    ev.save(function(err, userUpdated){
                    if(err){
                      res.status(500).json({success:false, error:err});
                    } else {
                      res.status(200).json(userUpdated);
                    }
                  });
                };
              }
              });
        });
        
module.exports=router;
