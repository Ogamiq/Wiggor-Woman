const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require ('bcryptjs');
const mongoose = require('mongoose');
var Event = require('../models/kzw_event');
var Event = mongoose.model('kzw_events');
const jwt = require('jsonwebtoken');
//TODO: import also a KZW event from models catalogue

//CRUD eventy
//CRUD zapisy
router.post('/event', (req, res) => {
  const name = req.body.name;
  const token = req.body.token;
  var decoded = jwt.verify(token, 'shhhhh');
  console.log(decoded)
  User.findById(decoded.id)

  new Event({
    name
  }).save((err, result) => {
    res.status(200).json({success:true, result})
  })
})

router.delete('/event/:id/:id2', (req, res) => {
  const id = req.params.id;
console.log(id)
  new Event({
    name: 'fff'
  }).save((err, result) => {
    res.status(200).json({success:true, result})
  })
})

module.exports = router;
