const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../models/user');
const User = mongoose.model('User');
const kzwEventModel = require('../models/kzwEvent');
const Event = mongoose.model('kzwEvent');


//based on the userID gets the array of  events ID's that this user in signed into
//TODO: improve this endpoint to get not the list of id's of evetns but the list of actuall events.

router.get('/user/:userID', function(req, res){
  var userID = req.params.userID;
  Event
    .findById(userID)
    .select('eventIDs')
    .exec( function(err, events){
       if (err){
          console.log(err);
          res.status(500).json(err);
          } else {
          res.status(200).json(events);
        }
    });
});

module.exports = router;
