const DetailMatch = require('../Models/detail_match').DetailMatchModel;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller DetailMatch');
};

exports.createDetailMatch=function(req, res){
  let detailMatch = new DetailMatch({
    tournament_result: req.body.tournament_result,
    type_event: req.body.type_event,
    detail_match:req.body.detail_match,
    time:req.body.time,
    isLocalEvent:req.body.isLocalEvent
  });
  detailMatch.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('DetailMatch created successfully')
  })
}

/* exports.getDetailMatch=function() {
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
        path: 'detail_match',
        populate: { path: 'team' }
      })
  })
} */

exports.get=function(req, res) {
  DetailMatch.find((err, detailMatch) => {
    if(err) {
        console.error(err)
        return reject(err)
    }   
    res.send(detailMatch)   
    }).populate({
      path: 'tournament_result',
      populate: { path: 'local_team' }
    }).populate({
      path: 'tournament_result',
      populate: { path: 'visitor_team' }
    }).populate({
      path: 'detail_match',
      populate: { path: 'team' }
    }).populate('player')
}


exports.detail_match_details = function (req, res) {
  detail_match.findById(req.params.id, function (err, detail_match) {
      if (err) return next(err);
      res.send(detail_match);
  })
};

exports.detail_match_update = function (req, res) {
  detail_match.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, detail_match) {
      if (err) return next(err);
      res.send('detail_match udpated.');
  });
};

exports.detail_match_delete = function (req, res) {
  detail_match.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};




