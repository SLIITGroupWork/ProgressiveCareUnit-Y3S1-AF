const express = require('express');
const router = express.Router();
const patientRegistrationController = require('../controllers/patient-registrations.controller');
const createRequest = require('../data-trans-objects/resquest');
const httpStatus = require('../consts/http-status.consts');

router.get('/getPatientRegistrationById/:id', (request, response) => {

    patientRegistrationController.getPatientRegistrationById(request.params.id).then(patientsResponse => {
        response.status(patientsResponse.status).send(patientsResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/getPatientRegistrationByReferenceNo/:referenceNo', (request, response) => {

    patientRegistrationController.getPatientRegistrationByReferenceNo(request.params.referenceNo).then(patientsResponse => {
        response.status(patientsResponse.status).send(patientsResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/getUnassignedPatientRegistrations', (request, response) => {

    patientRegistrationController.getUnassignedPatientRegistrations().then(patientsResponse => {
        response.status(patientsResponse.status).send(patientsResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/getAllPatientRegistrations', (request, response) => {

    patientRegistrationController.getAllPatientRegistrations().then(patientsResponse => {
        response.status(patientsResponse.status).send(patientsResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.post('/addNewPatientRegistration', (request, response) => {

    let patientRegistrationRequest = createRequest(request.body);

    patientRegistrationController.addNewPatientRegistration(patientRegistrationRequest).then(patientsResponse => {
        response.status(patientsResponse.status).send(patientsResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.put('/updatePatientRegistration', (request, response) => {

    let patientRegistrationRequest = createRequest(request.body);

    patientRegistrationController.updatePatientRegistration(patientRegistrationRequest).then(patientsResponse => {
        response.status(patientsResponse.status).send(patientsResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.post('/assignUserToPatientRegistration', (request, response) => {

    let userPatientRegistrationDataRequest = createRequest(request.body);

    patientRegistrationController.assignUserToPatientRegistration(userPatientRegistrationDataRequest).then(userPatientRegistrationDataResponse => {
        response.status(userPatientRegistrationDataResponse.status).send(userPatientRegistrationDataResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
})

module.exports = router;
