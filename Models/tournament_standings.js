let mongoose = require('mongoose')
let team=require('./teams');

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
module.exports.TournamentStandingModel=TournamentStandingModel;