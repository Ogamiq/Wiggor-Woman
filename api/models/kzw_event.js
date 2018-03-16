const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./user.js');
const kzwEventSchema = new Schema({
  //issue  update the kzw_event model to match the real events. Change every field except description to be requried.
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

const kzw_event = mongoose.model('kzw_events',kzwEventSchema, 'kzw_events');

module.exports = kzw_event;
