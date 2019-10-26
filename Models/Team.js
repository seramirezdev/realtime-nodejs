let mongoose = require('mongoose')

let teamSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true,
    unique: true,
  },
  points:Number,
  position:Number,
  gamesPlayed:Number
});

module.exports = mongoose.model('Team', teamSchema);