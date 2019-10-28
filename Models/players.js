let mongoose = require('mongoose')

let playerSchema = new mongoose.Schema({
    name: String,
    team:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
  }
});
const PlayerModel = mongoose.model('Player', playerSchema);
module.exports.PlayerModel=PlayerModel;