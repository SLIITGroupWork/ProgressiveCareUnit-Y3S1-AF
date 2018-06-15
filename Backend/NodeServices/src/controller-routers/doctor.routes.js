const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');
const httpStatus = require('../consts/http-status.consts');

router.post('/', (request, response) => {
    doctorController.addDoctor(request.body).then((data) => {
        response.status(data.status).send(data);
    }).catch((err) => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/', (request, response) => {
    doctorController.getAllDoctors().then((data) => {
        response.status(data.status).send(data);
    }).catch((err) => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/:id', (request, response) => {
    doctorController.getDoctorById(request.params.id).then((data) => {
        response.status(data.status).send(data);
    }).catch((err) => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/status/:status', (request, response) => {
    doctorController.getDoctorsByStatus(request.params.status).then((data) => {
        response.status(data.status).send(data);
    }).catch((err) => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/notTreated', (request, response) => {
    doctorController.getNotTreatedPatient.then((data) => {
        response.status(data.status).send(data);
    }).catch((err) => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/nextPatient', (request, response) => {
    doctorController.getNextPatient().then((data) => {
        response.status(data.status).send(data);
    }).catch((err) => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

module.exports = router;