const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../models/user');
const kzwEventModel = require('../models/kzwEvent');
const User = mongoose.model('User');
const {isAuthentic} = require("../controllers/userController");


//based on the userID gets all of the objects that the user subscribes
router.get('/user/:userID', isAuthentic, (req, res) => {
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
    ], (err,result) => {
        res.json({result})
    })
});

module.exports = router;
