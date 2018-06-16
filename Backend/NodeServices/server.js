const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const apiRoutes = require('./src/api.routes');
const appConfigs = require('./appConfig');

const databaseConfigs = require('./configurations/database.configurations');

const app = express();

//enable cross origin
app.use(cors());

// Database Configurations
databaseConfigs(mongoose);

// Passport middleware
app.use(passport.initialize());

// Passport configurations
require('./configurations/passport.configurations')(passport);

app.use(bodyParser.json());
app.use('/api', apiRoutes);

// Node server configuration
app.listen(appConfigs.serverPort, 'localhost', err => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log(`Server is up in port ${appConfigs.serverPort}...`);
});