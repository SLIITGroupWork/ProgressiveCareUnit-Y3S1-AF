const express = require('express');
const routers = express.Router();
const patientRegistrationController = require('../controllers/patient-registrations.controller');

routers.get('/', (request, response) => {

    patientRegistrationController.getAllPatientRegistrations().then(data => {
        response.status(data.status).send(data);
    }).catch(err => {
        response.status(err.status).send(err);
    });
});

routers.post('/', (request, response) => {

    patientRegistrationController.insertPatientRegistration(request.body).then(data => {
        response.status(data.status).send(data);
    }).catch(err => {
        response.status(err.status).send(err);
    });
});

module.exports = routers;
