const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const ctrl_database = require('./api/controllers/ctrl_database');

var routes = require('./api/routes');
var routesEvent = require('./api/routes/eventRouter');
var routesSubscribeEvent = require('./api/routes/eventSubscribeRouter');
app.use(bodyParser.json())

app.use(expressValidator());
app.use('/', express.static(__dirname + '/public'));

//next routes will be  with '/api' part: /api/register and so on...
app.use('/api', routes);
app.use('/api', routesEvent);
app.use('/api', routesSubscribeEvent);


//connect to the database
ctrl_database.connect_to_the_database();

app.listen(3000,function(){
    console.log("Server started on 3000");
});
