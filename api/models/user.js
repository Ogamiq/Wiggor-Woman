const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  }});

const User = module.exports = mongoose.model('User', UserSchema, 'User');
module.exports=UserSchema;
