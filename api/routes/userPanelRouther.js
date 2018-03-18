const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../models/user');
const User = mongoose.model('User');
const kzwEventModel = require('../models/kzwEvent');
const Event = mongoose.model('kzwEvent');



router.get('/getEventsOfUser/:userID', function(req, res){
  var userID = req.params.userID;
  console.log('GET the UserID', userID);
  Event
       .findById(userID)
       .select('events')
        .exec( function(err, events){
          if (err){
            console.log(err);
            res
               .status(500)
               .json(err);
          } else {
                res
                  .status(200)
                  .json(events);
              }});
});

module.export = router;
