var express = require('express');
var app = express();
var bp = require ('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session')
app.use(session({
  secret: 'keyboard',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/bower_components')));
app.use(bp.json());


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
  console.log("listening on server port 8000");
})
