let mongoose = require('mongoose')

let playerSchema = new mongoose.Schema({
  name: String,
  number:Number,
  team:String
});
const PlayerModel = mongoose.model('Player', playerSchema);
module.exports = {
  PlayerModel:PlayerModel,
  createPlayer:function (name,number,team){
    var player = new PlayerModel({
      name: name,
      number: number,
      team:team
    });
    player.save()
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
    });
  }
};