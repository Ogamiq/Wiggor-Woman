const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kzwEventSchema = new Schema({
  name: String,
  room: String,
  speaker: String,
  buliding: String,
  date: String,
  hour: String,
  description: String,
  pplLimit: Number,
  pplRegistered: Number
  participants: [Schema.Types.ObjectId]
});

const kzw_event = mongoose.model('kzw_events',kzwEventSchema, 'kzw_events');

module.exports = kzw_event;
