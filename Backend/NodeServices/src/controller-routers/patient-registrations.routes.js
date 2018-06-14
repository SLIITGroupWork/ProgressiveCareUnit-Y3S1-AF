const express = require('express');
const router = express.Router();
const patientRegistrationController = require('../controllers/patient-registrations.controller');
const createRequest = require('../data-trans-objects/resquest');
const httpStatus = require('../consts/http-status.consts');

router.get('/:id', (request, response) => {

    patientRegistrationController.getPatientRegistrationById(request.params.id).then(patientsResponse => {
        response.status(patientsResponse.status).send(patientsResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/', (request, response) => {

    patientRegistrationController.getAllPatientRegistrations().then(patientsResponse => {
        response.status(patientsResponse.status).send(patientsResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.post('/', (request, response) => {

    let patientRegistrationRequest = createRequest(request.body);

    patientRegistrationController.insertPatientRegistration(patientRegistrationRequest).then(patientsResponse => {
        response.status(patientsResponse.status).send(patientsResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

module.exports = router;
