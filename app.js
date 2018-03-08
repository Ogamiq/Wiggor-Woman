var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var mongoose = require('mongoose');
const expressValidator = require('express-validator');

var routes = require('./api/routes');
var routesEvent = require('./api/routes/eventRouter');
app.use(bodyParser.json())

app.use(expressValidator());
app.use('/', express.static(__dirname + '/public'));

//next routes will be  with '/api' part: /api/register and so on...
app.use('/api', routes);
app.use('/api', routesEvent);

//connect to the database
mongoose.connect('mongodb://Ogamiq:kzwPower123@ds046677.mlab.com:46677/kzwdb');
mongoose.connection.once('open', function() {
  console.log('Database connected');
}).on('error', function(error) {
  console.log('Connection error:', error);
});

app.listen(3000,function(){
    console.log("Server started on 3000");
});
