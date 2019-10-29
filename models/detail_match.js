let mongoose = require('mongoose')
let players=require('./players');
let tournament_results=require('./tournament_results');

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

module.exports.DetailMatchModel=DetailMatchModel;