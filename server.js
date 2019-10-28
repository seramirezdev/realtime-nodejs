var app = require('express')();
let mongoose = require('./dbconnect');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
let TeamModel = require('./Models/Team')
let PlayerModel = require('./Models/players')
let SoccerGameModel = require('./Models/soccerGame')
let DetailMatchModel = require('./Models/detail_match')
let TournamentResultModel = require('./Models/tournament_results')
let TournamentStandingModel = require('./Models/tournament_standings')

let EventModel = require('./Models/Event')


//DetailMatchModel.createDetailMatch("5db514321c9d4400008a9c55",'expulsado','5db4bbbe1c9d44000008cb1a',9,false);
TournamentStandingModel.getTournamentStanding()
  .then(docs => {
    console.log(docs)
  })
  .catch(err => {
    console.error(err)
})
console.log("=========RESULTADOS DE TORNEO==========")
/* DetailMatchModel.getTournamentResult()
  .then(docs => {
    console.log(docs)
  })
  .catch(err => {
    console.error(err)
})
console.log("=========JUGADORES==========")
PlayerModel.getPlayer()
  .then(docs => {
    console.log(docs)
  })
  .catch(err => {
    console.error(err)
}) */
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });   
  socket.on('message2', function(msg){
    //io.emit('chat message', msg);
    io.emit('message2', msg);
  });
});
TeamModel.TeamModel.watch().on('change', function(data){
  var datos;
  TeamModel.TeamModel.find({},(err, teams)=> {
    if (err) console.log(err);
    console.log(teams);
    io.emit('cambio', teams);
  }).sort({position : 1});  
  console.log(new Date(),'hubo un cambio en la tabla');
});

//obtener todos los equipos de la base de datos
app.get('/teams', (req, res) => {
  TeamModel.TeamModel.find({},(err, teams)=> {
    if (err) return handleError(err);
    console.log(teams)
    res.send(teams);
  }).sort({position : 1});
});

/* //publicar nuevos mensajes creados por el usuario en la base de datos
app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
        console.log(req.body);
        io.emit('message', req.body);
        res.sendStatus(200);
    });
});
 */

http.listen(3000, function(){
    console.log('server is running on port :3000');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});