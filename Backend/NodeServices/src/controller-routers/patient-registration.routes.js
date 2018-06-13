const express = require('express');
const router = express.Router();
const patientRegistrationController = require('../controllers/patient-registrations.controller');

router.get('/', (request, response) => {

    patientRegistrationController.getAllPatientRegistrations().then(patientsResponse => {
        response.status(patientsResponse.status).send(patientsResponse);
    }).catch(err => {
        response.status(err.status).send(err);
    });
});

router.post('/', (request, response) => {

    patientRegistrationController.insertPatientRegistration(request.body).then(patientsResponse => {
        response.status(patientsResponse.status).send(patientsResponse);
    }).catch(err => {
        response.status(err.status).send(err);
    });
});

module.exports = router;
