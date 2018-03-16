const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
// issue #24 add a fields to the user model and require them in the register route.
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
    required:true,
    default:false
  }});

const User = module.exports = mongoose.model('User', UserSchema, 'User');
module.exports=UserSchema;
