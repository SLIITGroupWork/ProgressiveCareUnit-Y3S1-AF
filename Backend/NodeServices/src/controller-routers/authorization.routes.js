const express = require('express');
const router = express.Router();
const authorizationsController = require('../controllers/authorizations.controller');
const createRequest = require('../data-trans-objects/resquest');
const httpStatus = require('../consts/http-status.consts');

router.post('/userLogin', (request, response) => {

    let loginRequest = createRequest(request.body);

    authorizationsController.userLogin(loginRequest).then(loginResponse => {
        response.status(loginResponse.status).send(loginResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

module.exports = router;
