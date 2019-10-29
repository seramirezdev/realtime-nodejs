const TournamentStanding = require('../Models/tournament_standings').TournamentStandingModel;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller TournamentStanding');
};
exports.createTournamentStanding=function(req, res){
    var tournamentStanding = new TournamentStanding({
      tournament_standing: req.body.tournament_standing,
      type_event: req.body.type_event,
      player:req.body.player,
      time:req.body.time,
      isLocalEvent:req.body.isLocalEvent
    });
    tournamentStanding.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('TournamentStanding created successfully')
    })
}


/* exports.getTournamentStanding=function() {
  return new Promise((resolve, reject) => {
      TournamentStanding.find((err, docs) => {
      if(err) {
          console.error(err)
          return reject(err)
      }        
      resolve(docs)
      }).populate('team')
  })
}  */


exports.get=function(req, res) {
  TournamentStanding.find((err, tournamentStanding) => {
    if(err) {
        console.error(err)
        return reject(err)
    }        
    res.send(tournamentStanding)
  })
}


exports.tournament_standings_details = function (req, res) {
  tournament_standings.findById(req.params.id, function (err, tournament_standings) {
      if (err) return next(err);
      res.send(tournament_standings);
  })
};

exports.tournament_standings_update = function (req, res) {
  tournament_standings.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, tournament_standings) {
      if (err) return next(err);
      res.send('tournament_standings udpated.');
  });
};

exports.tournament_standings_delete = function (req, res) {
  tournament_standings.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};


//ejemplo llamada get
/* tournament_standings.getTournamentStanding()
  .then(docs => {
    console.log(JSON.stringify(docs))
  })
  .catch(err => {
    console.error(err)
}) */
 