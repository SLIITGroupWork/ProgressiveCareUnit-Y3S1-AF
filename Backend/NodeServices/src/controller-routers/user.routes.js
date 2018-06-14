const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const createRequest = require('../data-trans-objects/resquest');
const httpStatus = require('../consts/http-status.consts');

/// need change
router.get('/:id/id', (request, response) => {

    usersController.getUserById(request.params.id).then(usersResponse => {
        response.status(usersResponse.status).send(usersResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/:nic', (request, response) => {

    usersController.getUserByNIC(request.params.nic).then(usersResponse => {
        response.status(usersResponse.status).send(usersResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.get('/', (request, response) => {

    usersController.getAllUsers().then(usersResponse => {
        response.status(usersResponse.status).send(usersResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.post('/', (request, response) => {

    let userRequest = createRequest(request.body);

    usersController.addNewUser(userRequest).then(usersResponse => {
        response.status(usersResponse.status).send(usersResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

router.put('/', (request, response) => {

    let userRequest = createRequest(request.body);

    usersController.updateUser(userRequest).then(usersResponse => {
        response.status(usersResponse.status).send(usersResponse);
    }).catch(err => {
        response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    });
});

module.exports = router;
