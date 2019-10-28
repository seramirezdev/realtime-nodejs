let mongoose = require('mongoose')

let teamSchema = new mongoose.Schema({
    name: String,
    shield:String
});
const TeamModel = mongoose.model('Team', teamSchema);

module.exports = {
    teamModel,
    createTeam:function (name,shield){
        var team = new TeamModel({
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
  },
  getTeam:function() {
    return new Promise((resolve, reject) => {
        teamModel.find((err, docs) => {
        if(err) {
            console.error(err)
            return reject(err)
        }        
        resolve(docs)
        })
    })
  }   
};