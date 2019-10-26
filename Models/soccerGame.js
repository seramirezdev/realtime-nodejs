let mongoose = require('mongoose')

let soccerGameSchema = new mongoose.Schema({
  teamA:{
      team:String,
      goal:Number
    },
  teamB:{
    team:String,
    goal:Number
    }
});

module.exports = mongoose.model('SoccerGame', soccerGameSchema);