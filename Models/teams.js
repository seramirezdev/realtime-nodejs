let mongoose = require('mongoose')

let teamSchema = new mongoose.Schema({
    name: String,
    shield:String
});
const TeamModel = mongoose.model('Team', teamSchema);

module.exports.TeamModel=TeamModel;