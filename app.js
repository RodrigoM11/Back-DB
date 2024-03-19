require ('dotenv').config()

const express = require ('express');
const bodyParser = require('body-parser');
const { databaseService } = require('./service/databaseService');

const app= express();

app.use(bodyParser.json());

const dbService = databaseService();

require('./routes')(app, dbService);

app.listen(3000, function() {
    console.log('App listening on port 3000!');

})