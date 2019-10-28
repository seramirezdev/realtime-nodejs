const Team = require('../Models/teams').TeamModel;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller Team');
};
exports.createTeam=function(name,shield){
    var team = new Team({
      name: name,
      shield: shield
    });
    team.save()
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
    });
}
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
}