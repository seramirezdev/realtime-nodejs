const TournamentResult = require('../Models/tournament_results').TournamentResultModel;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller TournamentResult');
};
exports.createTournamentResult=function(local_team,visitor_team,local_goals,visitor_goals,is_playing,current_time){
    var tournamentResult = new TournamentResult({
      local_team: local_team,
      visitor_team: visitor_team,
      local_goals:local_goals,
      visitor_goals:visitor_goals,
      is_playing:is_playing,
      current_time:current_time
    });
    tournamentResult.save()
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
    });
}
exports.getTournamentResult=function() {
  return new Promise((resolve, reject) => {
      TournamentResult.find((err, docs) => {
      if(err) {
          console.error(err)
          return reject(err)
      }        
      resolve(docs)
      }).populate('local_team').populate('visitor_team')
  })
}  