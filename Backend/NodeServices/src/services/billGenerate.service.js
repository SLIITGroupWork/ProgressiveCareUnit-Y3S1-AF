const drugService = require('./drug.service')
const BaseService = require('../base/services/base.service');
const prescriptionService = reqiure('./prescription.service');


class billGeneratorService extends BaseService {

    calculateDrugPrice(patientId,startDate,endDate){
        return new Promise((resolve,reject)=>{
            this.unitOfWork.presciptionSchema.find({patientId:patientId,$and: [ { date: { $gte: startDate } }, { date: { $lt: endDate } } ] },{_id:true})
            .then(prescriptionIds=>{
                for(let j=0;j<prescriptionIds.length;j++){
                    this.unitOfWork.prescriptionDrugsSchema.find({prescriptionIds:prescriptionIds[j]},{drugID:true,quantity:true,_id:false})
                    .then(drugData=>{
                        let totalprice;
                        for(let i=0;i<drugData.drugID.length;i++){
                            let price = drugService.getDrugPrice(drugData.drugID[i]);
                            totalprice = totalprice+(price*drugData.quantity);                            
    
                        }
                        resolve(totalprice);

                    }).catch(err=>{
                        reject(err);
                    });
                }        
                                
            }).catch(err =>{
                reject(err);

            });
            
        });
    }
    gen =function(Drugbill,expenses){
        return Drugbill+expenses;
    }

    //expenses = the other charges related to the bill than the drugs amount
    calculateTotal(patientId,startdate,endDate,expenses) {
        return new Promise((resolve,reject)=>{
            let DrugBill = calculateDrugPrice(patientId,startdate,endDate);
            this.gen(DrugBill,expenses).then(total=>{
                resolve(total,DrugBill);
            }).catch(err=>{
                reject(err);
            })
        })

        
    }
    generateTotalBill(patientId,startdate,endDate){
        return new Promise((resolve,reject)=>{
            this.unitOfWork.billSchema.find({patientId:patientId}).exec().then(billDetails =>{
                let totalAmount = this.calculateTotal(patientId,startdate,endDate,billDetails)
                resolve(billDetails,totalAmount);
            }).catch(err =>{
                reject(err);
            })
        });
    }

        
}

 module.exports = new billGeneratorService();

