const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../models/user');
const kzwEventModel = require('../models/kzwEvent');
const User = mongoose.model('User');


//based on the userID gets the array of  events ID's that this user in signed into
//TODO: improve this endpoint to get not the list of id's of evetns but the list of actuall events.

router.get('/user/:userID', function(req, res){
  var userID = req.params.userID;
  console.log(userID)
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
        // {$project:
        //         {
        //             "userEvents.room": 1
        //         }
        // }
    ], (err,result) => {
        res.json({result})
    })
});

module.exports = router;
