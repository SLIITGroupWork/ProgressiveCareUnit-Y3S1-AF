const express = require('express');
const passport = require('passport');

const router = express.Router();

const authorizationsRoutes = require('./controller-routers/authorization.routes');
const patientRegistrationsRoutes = require('./controller-routers/patient-registration.routes');
const usersRoutes = require('./controller-routers/user.routes');


router.use('/authorizations', authorizationsRoutes);

// Secured routes
router.use('/patient-registrations', passport.authenticate('jwt', { session: false }), patientRegistrationsRoutes);
router.use('/users', passport.authenticate('jwt', { session: false }), usersRoutes);

module.exports = router;