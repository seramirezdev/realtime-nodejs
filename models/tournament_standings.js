let mongoose = require('mongoose')
let team = require('./teams');

var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

let tournament_standingSchema = new mongoose.Schema({
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    },
    total_matches:Number,
    won_matches:Number,
    lost_matches:Number,
    drawn_matches:Number,
    total_points:Number,
});
const TournamentStandingModel = mongoose.model('Tournament_standing', tournament_standingSchema);



/*TournamentStandingModel.watch().on('change', function(data){
  TournamentStandingModel.find({},(err, tournamentStands)=> {
    if (err) console.log(err);
    io.emit('changeTournamentStand', tournamentStands);
  }).sort({total_points : -1}).populate('team');
  console.log(new Date(),'Hubo un cambio en la tabla tournament_standings');
});*/



module.exports.TournamentStandingModel=TournamentStandingModel;