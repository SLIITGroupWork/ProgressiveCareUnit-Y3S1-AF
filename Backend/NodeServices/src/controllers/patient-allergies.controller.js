const BaseController = require('../base/controllers/base.controller');
const patientAllergyService = require('../services/patient-allergies.service');

class PatientAllergyController extends BaseController{
    getAllPatientAllergies(){
        return new Promise((resolve,reject=>{
            patientAllergyService.getAllPatientAllergies().then(data=>{
                resolve(this.createResponse(this.statusCodes.OK,data))
            }).catch(err=>{
                reject(this.createResponse(this.statusCodes.InternalServerError, [],err ));
            });
        }));
    }

    getAllergyById(allergyId){
        return new Promise((resolve,reject)=>{
            patientAllergyService.getAllergyById(allergyId).then(data=>{
                resolve(this.createResponse(this.statusCodes.OK,data));
            })
        }).catch(err=>{
            reject(this.createResponse(this.statusCodes.InternalServerError,[],err))
        })
    }

    addPatientAllergy(allergyData){
        return new Promise((resolve,reject)=>{
            patientAllergyService.addPatientAllergy(allergyData.data).then(data=>{
                resolve(this.createResponse(this.statusCodes.Created,data));
            }).catch(err=>{
                reject(this.createResponse(this.statusCodes.InternalServerError,[],err));
            })
        })
    }
}

module.exports=new PatientAllergyController();
