const express = require('express');
const router = express.Router();
const doctorPatientController = require('../controllers/doctor-patient.controller');
const httpStatus = require('../consts/http-status.consts');

router.post('/', (request, response) => {
    doctorPatientController.addDoctorPatient(request.body).then((data) => {
        response.status(data.status).send(data);
    }).catch((err) => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/inTreament', (request, response) => {
    doctorPatientController.getDoctorPatientTreating().then((data) => {
        response.status(data.status).send(data);
    }).catch((err) => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

module.exports = router;