let mongoose = require('mongoose')

let eventSchema = new mongoose.Schema({
  namePlayer: String,
  action:String
});

module.exports = mongoose.model('Event', eventSchema);