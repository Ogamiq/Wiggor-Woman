const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./user.js');
const kzwEventSchema = new Schema({

  name:{
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  },
  speaker: {
    type: String,
    required: true
  },
  building: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  hour: {
    type: String,
    required: true
  },
  description:String,
  pplLimit: {
    type: Number,
    //required: true
  },
  pplRegistered: {
    type:Number,
    //required:true
  },
  participants: [UserSchema]
});

const kzwEvent = mongoose.model('kzwEvent',kzwEventSchema, 'kzwEvent');

module.exports = kzwEvent;
