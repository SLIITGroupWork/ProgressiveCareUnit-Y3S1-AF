const BaseService = require('../base/services/base.service');
const DrugService = require('./drug.service');



class prescriptionService extends BaseService {

    getPrescription(patientName,date) {

        return new Promise((resolve, reject) => {
            

            this.unitOfWork.patientRegistrationSchema.find({name:patientName},{_id:true}).then(dataPatientId => {
                this.unitOfWork.presciptionSchema.find({patientId:dataPatientId,date:date},{_id:true,doctorId:true}).then(dataPrescriptionId => {
                    this.unitOfWork.prescriptionDrugsSchema.find({presID:dataprescriptionId._id}).then(dataPrescription => {
                        this.unitOfWork.doctorSchema.find({_id:dataprescriptionId.doctorId},{firstName:true,_id:false}).then(dataDoctor => {
                            resolve(dataprescription,dataDoctor);
                        }).catch(err => {
                            reject(err);
                        });
                        
                    }).catch(err => {
                        reject(err);
                    });
                }).catch(err => {
                    reject(err);
                });
            }).catch(err => {
                reject(err);
            });            
        });
    }

    addNewPrescription(prescriptionData) {
        console.log("service1")

        return new Promise((resolve, reject) => {
            console.log("service289");
            //Get the patient Id using the service of the PatientRegistration by name
            //Get the doctor Id using the doctorService by name

            let prescription = new this.unitOfWork.presciptionSchema({
                patientId:prescriptionData.patientId,
                doctorId:prescriptionData.doctorId,
                date:new Date()             
                
            });
            console.log(prescription);
            prescription.save().then(data => {
                console.log("service22")
                resolve(data);
            }).catch(err => {
                console.log(err);
                reject(err);
            });
            //get the Prescription Id
            let DrugId;
            for(let i=0;t<drugNames.length;i++){

                this.unitOfWork.presciptionSchema. find({patientId:prescriptionData.patientId,date:Date(year, month, day)}, {_id:true}).then(dataPrescriptionId => {
                    DrugId = DrugService.getDrugIdByName(drugNames[i]);
                    let prescriptionDrugDetails = new this.unitOfWork.prescriptionDrugsSchema({
                        presID:dataPrescriptionId,
                        drugID:DrugId,
                        quantity:prescriptionData.quantities[i],
                        description:prescriptionData.descriptions[i]
                    });
                    prescriptionDrugDetails.save().then(data => {
                        resolve(data);
                    }).catch(err => {
                        reject(err);
                    });
                }).catch(err => {
                    reject(err);
                });   

            }
                  
        });
    }
    updatePrescription(patientID,prescriptionData){
        return new Promise((resolve,reject)=>{
            
            let prescription = new this.unitOfWork.presciptionSchema({
                patientId:patientID,
                doctorId:prescriptionData.doctorId,
                date:new Date(year, month, day)             
                
            });
            prescription.save().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
            //get the Prescription Id
            let DrugId;
            for(let i=0;t<drugNames.length;i++){

                this.unitOfWork.presciptionSchema. find({patientId:patientID}, {_id:true}).then(dataPrescriptionId => {
                    DrugId = DrugService.getDrugIdByName(drugNames[i]);
                    let prescriptionDrugDetails = new this.unitOfWork.prescriptionDrugsSchema({
                        presID:dataPrescriptionId,
                        drugID:DrugId,
                        quantity:prescriptionData.quantities[i],
                        description:prescriptionData.descriptions[i]
                    });
                    prescriptionDrugDetails.save().then(data => {
                        resolve(data);
                    }).catch(err => {
                        reject(err);
                    });
                }).catch(err => {
                    reject(err);
                });   

            }
        })
    }
    getQuantity(prescriptionId,drugId){
        return new Promise((resolve,reject)=>{
            this.unitOfWork.prescriptionDrugsSchema.find({presID:prescriptionId,drugID:drugId},{_id:false,quantity:true})
            .then(quantity =>{
                resolve(quantity);
            }).catch(err =>{
                reject(err);
            })
        });
    }
}

module.exports = new prescriptionService();