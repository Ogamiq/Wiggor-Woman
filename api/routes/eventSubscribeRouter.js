const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
var User = require('../models/user');
var User = mongoose.model('User');
var Event = require('../models/kzw_event');
var Event = mongoose.model('kzw_events');
const ctrl_users = require('../controllers/ctrl_users');

router.get('/getAllparticipants/:EventId', function(req, res){
  var id=req.params.EventId;
  console.log('GET the EventId', id);
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
            console.log('Returned socks', doc)
                res
                  .status(200)
                  .json(doc);
              }});
});
//adds a user to the array of participants of a particular event
router.post('/event_subscribe/:eventID/:userID', function(req, res){

  const eventID = req.params.eventID;
  const userID = req.params.userID;

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
            else {
              res.status(200)
              .json({success:true,message:"found user and event by their ids"});
            }
            });



//
//     else {
//       Event
//           .findById(id)
//           .exec(function(err, ev){
//             if (err){
//               console.log("Internal Server Error");
//               res.status(500)
//                  .json(err);
//             }
//             else if (!ev) {
//                console.log("Error finding event 404");
//                res.status(404).json({success:false, message: "Event ID is not found in database "});
//              }
//              if (ev && ev.participants.find((element) => element.name===name)!=='undefined'){
//                console.log(ev);
//                ev.participants.push({
//                   name: name,
//                   surname:surname,
//                   university:university,
//                   year_of_study:year_of_study,
//                   email:email,
//                   password:password
//                 });
//              ev.save((err, evUpdated)=>{
//                if(err){
//                  console.log(err);
//                  res.status(500).json(err);
//                } else {
//                  res.status(200).json(evUpdated.participants[evUpdated.participants.length-1]);
//                }
//              });
//           } else {
//             res.status(404).json('You have been already signed for this event!');
//           }
//        });
//  }
      }
    })
});

//issue #20 possibility to resign from a particular event
    router.delete('/event_subscribe/:eventId/participant/:userId', function(req, res){
      var eventId = req.params.eventId;
      var userId = req.params.userId;
      var UserID;
      console.log('GET the eventId ', eventId);
      console.log(userId);
      Event
           .findById(req.params.eventId)
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
                UserID = ev.participants.id(userId);
                if(!UserID){
                  res.status(404).json({success:false, message: "UserID is not found in database "});
                }  else{
                  ev.participants.id(userId).remove();
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
