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


// gets the list of userIDs that are in the array userIDs in the particular event
//TODO: improve this endpoint to get not the list of id's of evetns but the list of actuall events.
router.get('/event/:EventID', function(req, res){
  var id=req.params.eventID;
  Event
    .findById(id)
    .select('userIDs')
    .exec( function(err, doc){
       if (err){
         res.status(500).json(err);
       } else {
         res.status(200).json(doc);
    }});
});


//user subscribes to the event
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

            //updates the ids in the arrays inside both objects
            if(event && !event.userIDs.find((element) => element ===user._id)){
            User.findByIdAndUpdate({_id:userID}, {
              $addToSet:{
                "eventIDs":eventID
              }
            }, (err, result)=>{
              if(err){
                console.log(err);
              }
            });

            Event.findByIdAndUpdate({_id:eventID}, {
              $addToSet:{
                "userIDs":userID
              }
            }, (err, result)=>{
              if(err){
                console.log(err);
              }else {
                res.status(200).json({sucess:true, message:"user has sucessfully subscribed into the event"});
              }
            });
          }
            else {
              res.status(404).json('the user is already signed into this event');
            }
        });
    }
  });
});


//removes the userID form the array in
router.delete('/event/:eventID/:userID', function(req, res){
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

        console.log(user._id);

        Event
           .findById(eventID)
           .exec(function(err, event){
            if (err){
              console.log(err);
              res.status(400).json("couldn't find the event by its id");
            }

            //updates the ids in the arrays inside both objects
            if(event /*&& event.userIDs.find((element) => element ===user._id) */){
            User.findByIdAndUpdate({_id:userID}, {
              $pull:{
                "eventIDs":eventID
              }
            }, (err, result)=>{
              if(err){
                console.log(err);
              }
            });

            Event.findByIdAndUpdate({_id:eventID}, {
              $pull:{
                "userIDs":userID
              }
            }, (err, result)=>{
              if(err){
                console.log(err);
              }else {
                res.status(200).json({sucess:true, message:"user has sucessfully unsubscribed from the event"});
              }
            });
          }
              else {
              res.status(404).json('the user has not been signed for this event before');
            }
        });
    }
  });
});

module.exports=router;
