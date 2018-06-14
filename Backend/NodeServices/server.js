const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const apiRoutes = require('./src/api.routes');
const appConfigs = require('./appConfig');

const app = express();


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