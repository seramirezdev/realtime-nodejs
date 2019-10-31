const Player = require('../models/players').PlayerModel;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller player');
};
exports.createPlayer=function(req, res){
    let player = new Player(req.body);
    player.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Player created successfully')
    })
}

/* exports.getPlayer=function() {
    return new Promise((resolve, reject) => {
        Player.find((err, docs) => {
        if(err) {
            console.error(err)
            return reject(err)
        }        
        resolve(docs)
        }).populate('team')
    })
}  */

exports.get=function(req, res) {
    Player.find((err, player) => {
        if(err) {
            console.error(err)
            return reject(err)
        }        
        res.send(player)
    }).populate('team')
} 


exports.player_details = function (req, res) {
    Player.findById(req.params.id, function (err, player) {
        if (err) return next(err);
        res.send(player);
    }).populate('team')
};

exports.player_update = function (req, res) {
    Player.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, player) {
        if (err) return next(err);
        res.send('Player udpated.');
    });
};

exports.player_delete = function (req, res) {
    Player.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.getByTeam=function(req, res) {
    Player.find(({ team: req.params.id }),(err, player) => {
        if(err) {
            console.error(err)
            return reject(err)
        }        
        res.send(player)
    }).populate('team')
} 


