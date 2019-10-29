let mongoose = require('mongoose')

let eventSchema = new mongoose.Schema({
    name: String
});
const EventModel = mongoose.model('Event', eventSchema);

module.exports.EventModel=EventModel;