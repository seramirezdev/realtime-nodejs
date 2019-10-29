var app = require('express')();
let mongoose = require('./dbconnect');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
let team=require('./controllers/teams');

//Configuracion rutas
const teamRoute = require('./routes/team'); // Imports routes for the team
const playerRoute = require('./routes/player'); // Imports routes for the team
const detail_matchRoute = require('./routes/detail_match'); // Imports routes for the detail_match
const tournament_resultRoute = require('./routes/tournament_results'); // Imports routes for the tournament_results
const tournament_standingsRoute = require('./routes/tournament_standings'); // Imports routes for the tournament_standings
const eventRoute = require('./routes/event'); // Imports routes for the event

app.use('/team', teamRoute);
app.use('/event', eventRoute);
app.use('/player', playerRoute);
app.use('/detail_match', detail_matchRoute);
app.use('/tournament_result', tournament_resultRoute);
app.use('/tournament_standing', tournament_standingsRoute);


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
team.Team.watch().on('change', function(data){
  var datos;
  team.Team.find({},(err, teams)=> {
    if (err) console.log(err);
    console.log(teams);
    io.emit('cambio', teams);
  }).sort({position : 1});  
  console.log(new Date(),'hubo un cambio en la tabla');
});
 
//obtener todos los equipos de la base de datos
app.get('/teams', (req, res) => {
  team.Team.find({},(err, teams)=> {
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

app.get('/events', function(req, res){
    res.sendFile(__dirname + '/events.html');
});