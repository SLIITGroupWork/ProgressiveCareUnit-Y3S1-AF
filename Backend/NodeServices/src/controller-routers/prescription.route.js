const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescription.contoller');
const createRequest = require('../data-trans-objects/resquest');
const httpStatus = require('../consts/http-status.consts');

router.get('/:name', (request, response) => {
    let prescriptionRequest = createRequest(request.body);

    prescriptionController.getPescription(request.params.name,prescriptionRequest.date).then(prescriptionResponse => {
        response.status(prescriptionResponse.status).send(prescriptionResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});


router.post('/', (request, response) => {

    let prescriptionRequest = createRequest(request.body);

    prescriptionController.addPrescription(prescriptionRequest).then(prescriptionResponse => {
        response.status(prescriptionResponse.status).send(prescriptionResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});
router.put('/:patientID', (request, response) => {

    let prescriptionRequest = createRequest(request.body);

    prescriptionController.updatePrescription(request.params.patientID,prescriptionRequest).then(prescriptionResponse => {
        response.status(prescriptionResponse.status).send(prescriptionResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

module.exports = router;
