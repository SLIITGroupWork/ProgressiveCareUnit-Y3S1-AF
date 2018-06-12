const express = require('express');
const router = express.Router();

const patientRegistrationRoutes = require('./src/controller-routers/patient-registration.routes');

router.use('/patient-registration', patientRegistrationRoutes);

module.exports = router;