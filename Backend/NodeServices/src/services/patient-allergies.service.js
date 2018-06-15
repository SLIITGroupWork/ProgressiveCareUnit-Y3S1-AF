const BaseService = require('../base/services/base.service');

class PatientAllergyService extends BaseService{
    getAllPatientAllergies(){
        return new Promise((resolve,reject)=>{
            this.unitOfWork.patientAllergiesSchema.find().exec().then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            });
        });
    }

    getAllergyById(id){
        return new Promise((resolve,reject)=>{
            this.unitOfWork.patientAllergiesSchema.find({_id:id}).exec().then(data=>{
                resolve(data);
            }).catch(err=>{
                reject(err);
            })
        })
    }

    addPatientAllergy(allergyData){
        return new Promise((resolve,reject)=>{
            let allergy= new this.unitOfWork.patientAllergiesSchema({
                patientId:allergyData.patientId,//need to be clarify
                patientName:allergyData.patientName,//need to be clarify 
                allergyType:allergyData.allergyType,
                description:allergyData.description   
            })
            allergy.save().then((data)=>{
                resolve(allergy)
            }).catch((err)=>{
                reject(err);
            });
        });
    }
}

module.exports=new PatientAllergyService();