let mongoose = require('mongoose')

let playerSchema = new mongoose.Schema({
  name: String,
  number:Number,
  team:String
});

module.exports = mongoose.model('Player', playerSchema);