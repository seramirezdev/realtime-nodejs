let mongoose = require('mongoose')

let detail_matchSchema = new mongoose.Schema({
    tournament_result: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament_result'
    },
    type_event:String,
    player:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },
    time:Number,
    isLocalEvent:Boolean
});

const DetailMatchModel = mongoose.model('Detail_match', detail_matchSchema);

module.exports = {
    DetailMatchModel,
    createDetailMatch:function (tournament_result,type_event,player,time,isLocalEvent){
        var detailMatch = new DetailMatchModel({
        tournament_result: tournament_result,
        type_event: type_event,
        player:player,
        time:time,
        isLocalEvent:isLocalEvent
    });
    detailMatch.save()
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
    });
  },
  getDetailMatch:function() {
    return new Promise((resolve, reject) => {
        DetailMatchModel.find((err, docs) => {
        if(err) {
            console.error(err)
            return reject(err)
        }        
        resolve(docs)
        }).populate('tournament_result').populate('player')
    })
  }   
};