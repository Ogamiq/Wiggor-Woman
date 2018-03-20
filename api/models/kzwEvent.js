const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

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
  },
  pplRegistered: {
    type: Number,
  },
  userIDs: [Schema.Types.ObjectId]
});

const kzwEvent = mongoose.model('kzwEvent',kzwEventSchema, 'kzwEvent');

module.exports = kzwEvent;
