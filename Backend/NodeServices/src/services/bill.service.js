const BaseService = require('../base/services/base.service');



class billService extends BaseService {

    getAllBillDetails() {

        return new Promise((resolve, reject) => {

            this.unitOfWork.billSchema.find().exec().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }

    addBillDetails(billData) {
       

        return new Promise((resolve, reject) => {

            let billDetails = new this.unitOfWork.billSchema({
                patientId:billData.patientId,
                drugPrice:(billData.drugPrice) ? billData.drugPrice:0,
                hospitalCharges:billData.hospitalCharges,
                laboraryCharges:billData.laboraryCharges,
                OtherCharges:billData.OtherCharges
                
            });

            billDetails.save().then(data => {
               
                resolve(data);
            }).catch(err => {
                
                reject(err);
            });
        });
    }

    getBillDetailsByPatientId(patientId){
        return new Promise((resolve,reject) =>{
           
            this.unitOfWork.billSchema.find({patientId:patientId}).populate('User').exec().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }
    
    updateBillDetails(patientId,data){
        return new Promise((resolve,reject)=>{
            
            this.unitOfWork.billSchema.update({patientId:patientId}, data).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        })
    }
        
}

module.exports = new billService();