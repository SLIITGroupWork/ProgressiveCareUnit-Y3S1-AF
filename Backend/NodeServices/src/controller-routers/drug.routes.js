const express = require('express');
const router = express.Router();
const drugController = require('../controllers/drug.controller');

router.get('/', (request, response) => {

    drugController.getAllDrugDetails().then(data => {
        response.status(data.status).send(data);
    }).catch(err => {
        response.status(err.status).send(err);
    });
});

router.post('/', (request, response) => {

    drugController.insertDrug(request.body).then(data => {
        response.status(data.status).send(data);
    }).catch(err => {
        response.status(err.status).send(err);
    });
});

router.get('/:name', (request, response) => {

    drugController.getDrugDetailsByName(request.param.name).then(data => {
        response.status(data.status).send(data);
    }).catch(err => {
        response.status(err.status).send(err);
    });
});



module.exports = router;
