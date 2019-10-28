let mongoose = require('mongoose')

let playerSchema = new mongoose.Schema({
    name: String,
    team:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
  }
});
const PlayerModel = mongoose.model('Player', playerSchema);

module.exports = {
    PlayerModel,
    createPlayer:function (name,team){
        var player = new PlayerModel({
        name: name,
        team: team
    });
    player.save()
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
    });
  },
  getPlayer:function() {
    return new Promise((resolve, reject) => {
        PlayerModel.find((err, docs) => {
        if(err) {
            console.error(err)
            return reject(err)
        }        
        resolve(docs)
        }).populate('team')
    })
  }   
};