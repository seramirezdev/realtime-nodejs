const DetailMatch = require('../Models/detail_match').DetailMatchModel;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller DetailMatch');
};
exports.createDetailMatch=function(tournament_result,type_event,player,time,isLocalEvent){
    var detailMatch = new DetailMatch({
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
}
exports.getDetailMatch=function() {
  return new Promise((resolve, reject) => {
      DetailMatch.find((err, docs) => {
      if(err) {
          console.error(err)
          return reject(err)
      }        
      resolve(docs)
      }).populate({
        path: 'tournament_result',
        populate: { path: 'local_team' }
      }).populate({
        path: 'tournament_result',
        populate: { path: 'visitor_team' }
      }).populate({
        path: 'player',
        populate: { path: 'team' }
      })
  })
}