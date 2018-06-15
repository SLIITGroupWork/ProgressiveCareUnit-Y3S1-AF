const express = require('express');
const router = express.Router();

const patientRegistrationsRoutes = require('./controller-routers/patient-registrations.routes');
const usersRoutes = require('./controller-routers/user.routes');
const drugRoutes = require('./controller-routers/drug.routes');
const prescriptionRoutes = require('./controller-routers/prescription.route');
const billRoutes = require('./controller-routers/billGenerate.route');

router.use('/patient-registrations', patientRegistrationsRoutes);
router.use('/users', usersRoutes);

router.use('/drugs', drugRoutes);
router.use('/prescriptions', prescriptionRoutes);
router.use('/bill', billRoutes);


module.exports = router;