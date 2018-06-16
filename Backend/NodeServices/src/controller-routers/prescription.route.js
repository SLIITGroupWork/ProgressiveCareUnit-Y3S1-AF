const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescription.contoller');
const createRequest = require('../data-trans-objects/resquest');
const httpStatus = require('../consts/http-status.consts');

router.get('/searchPrescription/:name', (request, response) => {
    let prescriptionRequest = createRequest(request.body);

    prescriptionController.getPescription(request.params.name,prescriptionRequest.date).then(prescriptionResponse => {
        response.status(prescriptionResponse.status).send(prescriptionResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});


router.post('/addPrescription', (request, response) => {

    //let prescriptionRequest = createRequest(request.body);
    console.log("Route")
    console.log(request.body)


    prescriptionController.addPrescription(request.body).then(prescriptionResponse => {
        response.status(prescriptionResponse.status).send(prescriptionResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});
router.put('/updatePrescription/:patientID', (request, response) => {

    //let prescriptionRequest = createRequest(request.body);

    prescriptionController.updatePrescription(request.params.patientID,request.body).then(prescriptionResponse => {
        response.status(prescriptionResponse.status).send(prescriptionResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

module.exports = router;
