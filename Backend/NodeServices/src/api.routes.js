const express = require('express');
const router = express.Router();

const authorizationsRoutes = require('./controller-routers/authorization.routes');
const patientRegistrationsRoutes = require('./controller-routers/patient-registration.routes');
const usersRoutes = require('./controller-routers/user.routes');


const doctor = require('./controller-routers/doctor.routes');
const doctorPatient = require('./controller-routers/doctor-patient.routes');


router.use('/authorizations', authorizationsRoutes);
router.use('/patient-registrations', patientRegistrationsRoutes);
router.use('/users', usersRoutes);

router.use('./doctor', doctor);
router.use('/doctor-patient', doctorPatient);

module.exports = router;