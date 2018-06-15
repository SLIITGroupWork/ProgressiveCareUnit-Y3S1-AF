const express = require('express');
const router = express.Router();
const allergyController = require('../controllers/patient-allergies.controller');


router.get('/:id',(request,reject)=>{
    allergyController.getAllergyById(request.params.id).then(data=>{
        response.status(data.status).send(data);
    }).catch(err=>{
        response.status(err.status).send(err);
    })
})

router.get('/',(request,response)=>{
    allergyController.getAllPatientAllergies().then(data=>{
        response.status(data.status).send(data);
    }).catch(err=>{
        response.status(err.status).send(err);
    })
})

router.post('/',(request,response)=>{
    allergyController.addPatientAllergy(request.body).then(data=>{
        response.status(data.status).send(data);
    }).catch(err=>{
        response.status(err.status).send(err);
    })
})












