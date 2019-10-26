

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