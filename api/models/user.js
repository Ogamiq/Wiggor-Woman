const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  surname:{
    type: String,
    required: true
  },
   university:{
      type: String,
      required: true
    },
    year_of_study:{
      type: String,
      required: true
    },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  isAdmin:{
    type:Boolean,
    default:false
  }});

const User = module.exports = mongoose.model('User', UserSchema, 'User');
module.exports=UserSchema;
