let mongoose = require('mongoose')

let tournament_standingSchema = new mongoose.Schema({
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    },
    total_matches:Number,
    won_matches:Number,
    lost_matches:Number,
    drawn_matches:Number,
    total_points:Number,
});
const TournamentStandingModel = mongoose.model('Tournament_standing', tournament_standingSchema);
module.exports = {
    TournamentStandingModel,
    createTournamentStanding:function (tournament_standing,type_event,player,time,isLocalEvent){
        var tournamentStanding = new TournamentResultModel({
        tournament_standing: tournament_standing,
        type_event: type_event,
        player:player,
        time:time,
        isLocalEvent:isLocalEvent
    });
    tournamentStanding.save()
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
    });
  },
  getTournamentStanding:function() {
    return new Promise((resolve, reject) => {
        TournamentStandingModel.find((err, docs) => {
        if(err) {
            console.error(err)
            return reject(err)
        }        
        resolve(docs)
        }).populate('team')
    })
  }   
};