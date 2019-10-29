const Team = require('../Models/teams').TeamModel;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller Team');
};
module.exports.Team=Team;
exports.createTeam=function(req, res){
    let team = new Team({
      name: req.body.name,
      shield: req.body.shield
    });
    team.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Team created successfully')
  })
}
/* 
exports.getTeam=function() {
  return new Promise((resolve, reject) => {
      Team.find((err, docs) => {
      if(err) {
          console.error(err)
          return reject(err)
      }        
      resolve(docs)
      })
  })
} */


exports.get=function(req, res) {
  Team.find((err, team) => {
    if(err) {
        console.error(err)
        return reject(err)
    }        
    res.send(team)
  })
}

exports.team_details = function (req, res) {
  Team.findById(req.params.id, function (err, team) {
      if (err) return next(err);
      res.send(team);
  })
};

exports.team_update = function (req, res) {
  Team.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, team) {
      if (err) return next(err);
      res.send('Team udpated.');
  });
};

exports.team_delete = function (req, res) {
  Team.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};
