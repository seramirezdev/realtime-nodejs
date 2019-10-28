const TournamentStanding = require('../Models/tournament_standings').TournamentStandingModel;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller TournamentStanding');
};
exports.createTournamentStanding=function(tournament_standing,type_event,player,time,isLocalEvent){
    var tournamentStanding = new TournamentStanding({
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
}
exports.getTournamentStanding=function() {
  return new Promise((resolve, reject) => {
      TournamentStanding.find((err, docs) => {
      if(err) {
          console.error(err)
          return reject(err)
      }        
      resolve(docs)
      }).populate('team')
  })
} 

//ejemplo llamada get
/* tournament_standings.getTournamentStanding()
  .then(docs => {
    console.log(JSON.stringify(docs))
  })
  .catch(err => {
    console.error(err)
}) */
 