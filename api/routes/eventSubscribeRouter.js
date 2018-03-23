const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../models/user');
const User = mongoose.model('User');
const kzwEventModel = require('../models/kzwEvent');
const Event = mongoose.model('kzwEvent');
const userController = require('../controllers/userController');
const {isAuthentic} = require("../controllers/userController");
const async = require('async');


// gets the list of userIDs that are in the array userIDs in the particular event
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
router.post('/event/:eventID/:userID', isAuthentic, async (req, res) => {
    try {
        var eventID = req.params.eventID;
        var userID = req.params.userID;

        let user = await User.findById(userID);
        let event = await Event.findById(eventID);
        if(!user) res.json({success: false, message: "couldn't find the user by its id"});
        if(!event) res.json({success: false, message: "couldn't find the event by its id"});

        if((event.pplLimit - event.userIDs.length) <= 0) res.json({success: false, message: "there are no spots left"});

        if(!userController.isSubscribing(event.userIDs, user._id)){
            await User.findByIdAndUpdate(userID, {
                $addToSet:{
                    "eventIDs": new mongoose.mongo.ObjectId(eventID)
                }
            });

            await Event.findByIdAndUpdate(eventID, {
                $addToSet:{
                    "userIDs": new mongoose.mongo.ObjectId(userID)
                }
            });
            res.json({success: true});
        } else res.json({success: false, message: "the user is already signed into this event"});
    } catch (err) {
        res.json({success: false, message: "promise err"});
    }
});

//user resigns from the event
router.delete('/event/:eventID/:userID', isAuthentic, async (req, res) => {
    try {
        var eventID = req.params.eventID;
        var userID = req.params.userID;

        let user = await User.findById(userID);
        let event = await Event.findById(eventID);
        if(!user) res.json({success: false, message: "couldn't find the user by its id"});
        if(!event) res.json({success: false, message: "couldn't find the event by its id"});

        if(userController.isSubscribing(event.userIDs, user._id)){
            await User.findByIdAndUpdate(userID, {
                $pull:{
                    "eventIDs": eventID
                }
            });

            await Event.findByIdAndUpdate(eventID, {
                $pull:{
                    "userIDs": userID
                }
            });
            res.json({success: true});
        } else res.json({success: false, message: "the user has not been signed into this event"});
    } catch (err) {
        res.json({success: false, message: "promise err"});
    }
});

module.exports = router;
