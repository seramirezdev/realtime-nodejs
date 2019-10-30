const TournamentResult = require('../models/tournament_results').TournamentResultModel;
module.exports.TournamentResult=TournamentResult;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller TournamentResult');
};

exports.createTournamentResult=function(req, res){
  var tournamentResult = new TournamentResult(req.body);
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
  }).populate(['local_team','visitor_team'])
}


exports.tournament_result_details = function (req, res) {
  TournamentResult.findById(req.params.id, function (err, tournament_result) {
      if (err) return next(err);
      res.send(tournament_result);
  })
};

exports.tournament_result_update = function (req, res) {
  TournamentResult.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, tournament_result) {
      if (err) return next(err);
      res.send('tournament_result udpated.');
  });
};

exports.tournament_result_delete = function (req, res) {
  TournamentResult.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};


exports.get_is_playing=function(req, res) {
  TournamentResult.find({ is_playing: true },(err, tournamentResult) => {
    if(err) {
        console.error(err)
        return reject(err)
    }        
    res.send(tournamentResult)
  })
}

