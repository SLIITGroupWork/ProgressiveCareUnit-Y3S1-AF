const express = require('express');
const router = express.Router();
const patientPhysicalExamsController = require('../controllers/patient-physical-exams.controller');

router.get('/', (request, response) => {
    patientPhysicalExamsController.getAllPhysicalExamsDetail().then(data => {
        response.status(data.status).send(data);
    }).catch(err => {
        response.status(err.status).send(err)
    });
});

router.get('/:id', (request, response) => {
    patientPhysicalExamsController.getPhysicalExamById(request.params.id).then(data => {
        response.status(data.status).send(data);
    }).catch(err => {
        response.status(err.status).send(err)
    });
})

router.post('/', (request, response) => {
    patientPhysicalExamsController.insertNewPhysicalExam(request.data).then(data => {
        response.status(data.status).send(data);
    }).catch(err => {
        response.status(err.status).send(err);
    })
})

module.exports = router;