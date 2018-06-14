const express = require('express');
const router = express.Router();

const authorizationsRoutes = require('./controller-routers/authorization.routes');
const patientRegistrationsRoutes = require('./controller-routers/patient-registration.routes');
const usersRoutes = require('./controller-routers/user.routes');

router.use('/authorizations', authorizationsRoutes);
router.use('/patient-registrations', patientRegistrationsRoutes);
router.use('/users', usersRoutes);

module.exports = router;