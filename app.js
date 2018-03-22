const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const cors = require('cors');
const databaseController = require('./api/controllers/databaseController');

const routesLoginRegister = require('./api/routes/');
const routesCRUDevent = require('./api/routes/eventRouter');
const routesSubscribeEvent = require('./api/routes/eventSubscribeRouter');
const routesUserPanel = require('./api/routes/userPanelRouter');
const {isAuthentic} = require('./api/controllers/userController');

app.use(bodyParser.json());
//app.use(cors);

app.use(expressValidator());
app.use('/', express.static(__dirname + '/public'));

//next routes will be  with '/api' part: /api/register and so on...
app.use('/api', routesLoginRegister);
app.use('/api', routesCRUDevent);
app.use('/api', routesSubscribeEvent);
app.use('/api', routesUserPanel);


databaseController.connectWithTheDatabase();

app.listen(3000,function(){
    console.log("Server started on 3000");
});
