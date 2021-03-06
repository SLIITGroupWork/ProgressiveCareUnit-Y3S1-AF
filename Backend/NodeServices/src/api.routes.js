const express = require('express');
const passport = require('passport');

const router = express.Router();

const authorizationsRoutes = require('./controller-routers/authorization.routes');
const patientRegistrationsRoutes = require('./controller-routers/patient-registration.routes');
const usersRoutes = require('./controller-routers/user.routes');
const drugRoutes = require('./controller-routers/drug.routes');
const prescriptionRoutes = require('./controller-routers/prescription.route');
const billRoutes = require('./controller-routers/bill.route');
const billGenerateRoutes = require('./controller-routers/billGenerate.route');
const patientAllergiesRoutes = require('./controller-routers/patient-allergies.routes');
const patientPhysicalExamsRoutes = require('./controller-routers/patient-physical-exams.routes');
const doctor = require('./controller-routers/doctor.routes');
const doctorPatient = require('./controller-routers/doctor-patient.routes');

// Routes that don't need secured
router.use('/authorizations', authorizationsRoutes);

// Secured routes
router.use('/patient-registrations', passport.authenticate('jwt', { session: false }), patientRegistrationsRoutes);
router.use('/users', passport.authenticate('jwt', { session: false }), usersRoutes);

router.use('/doctors', doctor);
router.use('/doctor-patients', doctorPatient);

router.use('/patient-allergies', patientAllergiesRoutes);
router.use('/patient-physicalExams', patientPhysicalExamsRoutes);

//router.use('/drugs',passport.authenticate('jwt', { session: false }), drugRoutes);
router.use('/drugs', drugRoutes);
router.use('/prescriptions', prescriptionRoutes);
router.use('/bill', billRoutes);
router.use('/billPDF', billGenerateRoutes);

module.exports = router;