const express = require('express');
const router = express.Router();

const patientRegistrationsRoutes = require('./controller-routers/patient-registrations.routes');

router.use('/patient-registrations', patientRegistrationsRoutes);

module.exports = router;