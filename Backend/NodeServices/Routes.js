const express = require('express');
const routes = express.Router();

const patientRegistrationRoutes = require('./src/controller-routers/patient-registration.routes');

routes.use('/patient-registration', patientRegistrationRoutes);

module.exports = routes;