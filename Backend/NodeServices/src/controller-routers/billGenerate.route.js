const express = require('express');
const router = express.Router();
const billGenerateController = require('../controllers/billGenerate.controller');
const createRequest = require('../data-trans-objects/resquest');
const httpStatus = require('../consts/http-status.consts');

router.get('/:id', (request, response) => {

    billGenerateController.getBillDetails(request.params.id).then(billResponse => {
        response.status(billResponse.status).send(billResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/', (request, response) => {

        billGenerateController.searchAllBillDetails().then(billResponse => {
        response.status(billResponse.status).send(billResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.post('/', (request, response) => {

    let billRequest = createRequest(request.body);

        billGenerateController.insertBillDetails(billRequest).then(billResponse => {
        response.status(billResponse.status).send(billResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});
router.get('/:id', (request, response) => {

    let billRequest = createRequest(request.body);

        billGenerateController.generateBill(request.params.id,billRequest).then(billResponse => {
        response.status(billResponse.status).send(billResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

module.exports = router;
