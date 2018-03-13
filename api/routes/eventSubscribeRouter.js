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

//adding users to the array of particular event
router.post('/event_subscribe/:eventId/participant', function(req, res){
  const name=req.body.name;
  const email=req.body.email;
  const password = req.body.password;

  User.findOne({
    email
  }).exec(function(err, user){
    if (err){
      console.log(err);
      res.status(400)
        .json(err);
    }
     if(user) {
       console.log(user);
       res.status(200);
     }
   });

  var eventId = req.params.eventId;
  console.log('GET the eventId ', eventId);
  Event
       .findById(eventId)
       .select()
        .exec( function(err, ev){
          var response = {
            status : 200,
            message : []
          };
          if(err) {
            console.log("Error finding event");
            response.status = 500;
            response.message = err;
          }
          else if (!ev) {
            console.log("Error finding event");
            response.status = 404;
            response.message = {
            "message" : "Event ID is not found in database "};
          }

          if (ev && ev.participants.find(check_user)){
            console.log("nu bliaaa!")
            console.log(ev);
            ev.participants.push({
               name: req.body.name,
               email:req.body.email,
               password:req.body.password
             });
          ev.save((err, evUpdated)=>{
            if(err){
              console.log(err);
              res.status(500)
                 .json(err);
            } else {
              res.status(200)
                 .json(evUpdated.participants[evUpdated.participants.length-1]);
            }
          });

        } else {
          console.log('Вали отсюда!');
          res.json("You have been signed");
        }

      });

    });

  function check_user(item){
        if (item.name===req.body.name){
          return false;
        } else return true;
    };



module.exports=router;
