const Express    = require('express');
var Controller  = require('../Controller/Drug.Controller');
var Routers      = Express.Router();


Routers.post('/', (req, res) => {
    Controller.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

Routers.get('/', (req, res) => {
    Controller.searchAll().then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

Routers.put('/:name', (req, res) => {
    Controller.update(req.params.name, req.body).then(data => {
        res.status(data.status).send({data: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

Routers.get('/:name', (req, res) => {
    Controller.searchOne(req.params.name).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

module.exports = Routers;
