const express = require('express');
const router = express.Router();
const billGenerateController = require('../controllers/billGenerate.controller');
const httpStatus = require('../consts/http-status.consts');

router.get('/searchBillDetailsByPatientId/:patientId', (request, response) => {

    billGenerateController.getBillDetails(request.params.patientId).then(billResponse => {
        response.status(billResponse.status).send(billResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/searchAllBillDetails', (request, response) => {

    billGenerateController.searchAllBillDetails().then(billResponse => {
        response.status(billResponse.status).send(billResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.post('/addNewBillDetails', (request, response) => {

    billGenerateController.insertBillDetails(request.body).then(billResponse => {
        response.status(billResponse.status).send(billResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});
router.put('/editBillDetails/:patientId', (request, response) => {

    billGenerateController.editBillDetails(request.params.patientId, request.body).then(billResponse => {
        response.status(billResponse.status).send(billResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

module.exports = router;
