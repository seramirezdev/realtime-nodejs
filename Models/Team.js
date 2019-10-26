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
const TeamModel = mongoose.model('Team', teamSchema);

module.exports = {
  TeamModel:TeamModel,
  createTeam:function (name,points,position,gamesPlayed){
    var team = new TeamModel({
      name: name,
      points: points,
      position:position,
      gamesPlayed:gamesPlayed
    });
    team.save()
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
    });
  }
};