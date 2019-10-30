var express = require('express');
var app = express();
let mongoose = require('./dbconnect');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
global.routServer="'http://localhost:3000";

// Bootstrap 4 y librerías necesarias
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

//Configuracion rutas
const teamRoute = require('./routes/team'); // Imports routes for the team
const playerRoute = require('./routes/player'); // Imports routes for the team
const detail_matchRoute = require('./routes/detail_match'); // Imports routes for the detail_match
const tournament_resultRoute = require('./routes/tournament_results'); // Imports routes for the tournament_results
const tournament_standingsRoute = require('./routes/tournament_standings'); // Imports routes for the tournament_standings
const eventRoute = require('./routes/event'); // Imports routes for the event

app.use('/teams', teamRoute);
app.use('/players', playerRoute);
app.use('/events', eventRoute);
app.use('/detail_matchs', detail_matchRoute);
app.use('/tournament_results', tournament_resultRoute);
app.use('/tournament_standings', tournament_standingsRoute);


/* Socket *********************************************/
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });   
  socket.on('message2', function(msg){
    //io.emit('chat message', msg);
    io.emit('message2', msg);
  });
  socket.on('events', function(ev){
    io.emit('events', ev);
    de
  });
});

let team = require('./controllers/teams');
team.Team.watch().on('change', function(data){
  var datos;
  team.Team.find({},(err, teams)=> {
    if (err) console.log(err);
    console.log(teams);
    io.emit('cambio', teams);
  }).sort({position : 1});  
  console.log(new Date(),'hubo un cambio en la tabla');
});
/******************************************************/


http.listen(3000, function(){
    console.log('server is running on port :3000');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/event', function(req, res){
  res.sendFile(__dirname + '/views/events.html');
});