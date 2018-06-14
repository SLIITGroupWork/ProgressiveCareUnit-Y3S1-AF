const express = require('express');
const router = express.Router();

const patientRegistrationsRoutes = require('./controller-routers/patient-registrations.routes');
const usersRoutes = require('./controller-routers/user.routes');

router.use('/patient-registrations', patientRegistrationsRoutes);
router.use('/users', usersRoutes);

module.exports = router;