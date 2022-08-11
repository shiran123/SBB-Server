const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('usermaster', userSchema)