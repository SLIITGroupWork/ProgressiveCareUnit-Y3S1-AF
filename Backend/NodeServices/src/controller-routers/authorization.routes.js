const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const createRequest = require('../data-trans-objects/resquest');
const httpStatus = require('../consts/http-status.consts');

/// need change
router.get('/getUserById/:id', (request, response) => {

    usersController.getUserById(request.params.id).then(usersResponse => {
        response.status(usersResponse.status).send(usersResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/getUserByNIC/:nic', (request, response) => {

    usersController.getUserByNIC(request.params.nic).then(usersResponse => {
        response.status(usersResponse.status).send(usersResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/getAllUsers', (request, response) => {

    usersController.getAllUsers().then(usersResponse => {
        response.status(usersResponse.status).send(usersResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.post('/addNewUser', (request, response) => {

    let userRequest = createRequest(request.body);

    usersController.addNewUser(userRequest).then(usersResponse => {
        response.status(usersResponse.status).send(usersResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.put('/updateUser', (request, response) => {

    let userRequest = createRequest(request.body);

    usersController.updateUser(userRequest).then(usersResponse => {
        response.status(usersResponse.status).send(usersResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

module.exports = router;
