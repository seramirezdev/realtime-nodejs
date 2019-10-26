let mongoose = require('mongoose')

let soccerGameSchema = new mongoose.Schema({
  teamA:{
      team:String,
      goal:Number
    },
  teamB:{
    team:String,
    goal:Number
    },
  finalizado:Boolean
});
const SoccerGameModel = mongoose.model('SoccerGame', soccerGameSchema);

module.exports = {
  SoccerGameModel:SoccerGameModel,
  createSoccerGame:function (teamA,goalA,teamB,goalB,finalizado){
    var soccerGame = new SoccerGameModel({
      teamA: {
        team:teamA,
        goal:goalA
      },
      teamB: {
        team:teamB,
        goal:goalB
      },
      finalizado: finalizado
    });
    soccerGame.save()
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
    });
  }
};