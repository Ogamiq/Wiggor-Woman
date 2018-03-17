const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const databaseController = require('./api/controllers/databaseController');
const tokenController = require('./api/controllers/tokenController');

const routesLoginRegister = require('./api/routes/');
const routesCRUDevent = require('./api/routes/eventRouter');
const routesSubscribeEvent = require('./api/routes/eventSubscribeRouter');
app.use(bodyParser.json())

app.use(expressValidator());
app.use('/', express.static(__dirname + '/public'));

//next routes will be  with '/api' part: /api/register and so on...
app.use('/api', routesLoginRegister);
app.use('/api', routesCRUDevent);
app.use('/api', routesSubscribeEvent);

databaseController.connectWithTheDatabase();

app.listen(3000,function(){
    console.log("Server started on 3000");
});
