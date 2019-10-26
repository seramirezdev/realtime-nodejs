let mongoose = require('mongoose')

let eventSchema = new mongoose.Schema({
  namePlayer: String,
  action:String
});
const EventModel = mongoose.model('Event', eventSchema);

module.exports = {
  EventModel:EventModel,
  createEvent:function (namePlayer,action){
    var event = new EventModel({
      namePlayer: namePlayer,
      action: action
    });
    event.save()
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
    });
  }
};