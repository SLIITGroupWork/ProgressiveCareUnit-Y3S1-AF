const BaseService = require('../base/services/base.service'); 
const drugService = require('./drug.service');
const prescriptionService = reqiure('./prescription.service');



class PatientHistoryService extends BaseService{
    getPatientHistory(patientId){
        return new Promise((resolve,reject)=>{

        })
    }
}

module.exports= new PatientHistoryService();