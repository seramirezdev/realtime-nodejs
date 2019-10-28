let mongoose = require('mongoose')

let tournament_resultSchema = new mongoose.Schema({
    local_team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    },
    visitor_team:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    },
    local_goals:Number,
    visitor_goals:Number,
    is_playing:Boolean,
    current_time:Number,
});
const TournamentResultModel = mongoose.model('Tournament_result', tournament_resultSchema);

module.exports = {
    TournamentResultModel,
    createTournamentResult:function (tournament_result,type_event,player,time,isLocalEvent){
        var tournamentResult = new TournamentResultModel({
        tournament_result: tournament_result,
        type_event: type_event,
        player:player,
        time:time,
        isLocalEvent:isLocalEvent
    });
    tournamentResult.save()
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
    });
  },
  getTournamentResult:function() {
    return new Promise((resolve, reject) => {
        TournamentResultModel.find((err, docs) => {
        if(err) {
            console.error(err)
            return reject(err)
        }        
        resolve(docs)
        }).populate('team')
    })
  }   
};