const express = require('express');
const router = express.Router();
const drugController = require('../controllers/drug.controller');
const createRequest = require('../data-trans-objects/resquest');
const httpStatus = require('../consts/http-status.consts');

router.get('/:name', (request, response) => {

    drugController.getDrugDetailsByName(request.params.name).then(drugResponse => {
        response.status(drugResponse.status).send(drugResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/', (request, response) => {

    drugController.getAllDrugDetails().then(drugResponse => {
        response.status(drugResponse.status).send(drugResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.post('/', (request, response) => {
    console.log("checkingRoute");

    let drugRequest = createRequest(request.body);

    drugController.insertDrug(drugRequest).then(drugResponse => {
        response.status(drugResponse.status).send(drugResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});
module.exports = router;

