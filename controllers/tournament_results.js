const TournamentResult = require('../Models/tournament_results').TournamentResultModel;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller TournamentResult');
};

exports.createTournamentResult=function(req, res){
  var tournamentResult = new TournamentResult({
    local_team: req.body.local_team,
    visitor_team: req.body.visitor_team,
    local_goals:req.body.local_goals,
    visitor_goals:req.body.visitor_goals,
    is_playing:req.body.is_playing,
    current_time:req.body.current_time
  });
  tournamentResult.save(function (err) {
    if (err) {
        return next(err);
    }
    res.send('TournamentResult created successfully')
  })
}
/* 
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
 */

exports.get=function(req, res) {
  TournamentResult.find((err, tournamentResult) => {
    if(err) {
        console.error(err)
        return reject(err)
    }        
    res.send(tournamentResult)
  }).populate('local_team').populate('visitor_team')
}


exports.tournament_result_details = function (req, res) {
  tournament_result.findById(req.params.id, function (err, tournament_result) {
      if (err) return next(err);
      res.send(tournament_result);
  })
};

exports.tournament_result_update = function (req, res) {
  tournament_result.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, tournament_result) {
      if (err) return next(err);
      res.send('tournament_result udpated.');
  });
};

exports.tournament_result_delete = function (req, res) {
  tournament_result.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};




