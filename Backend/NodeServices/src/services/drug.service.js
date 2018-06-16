const BaseService = require('../base/services/base.service');



class DrugService extends BaseService {

    getAllDrugDetails() {

        return new Promise((resolve, reject) => {

            this.unitOfWork.drugsSchema.find().exec().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }

    addNewDrug(drugData) {

        return new Promise((resolve, reject) => {
            let drug = new this.unitOfWork.drugsSchema({
                drugName: drugData.drugname,
                price: drugData.price,
                
            });

            drug.save().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }

    getDrugByName(drugname){
        return new Promise((resolve,reject) =>{
           
            this.unitOfWork.drugsSchema. find({drugName:drugname}).populate('User').exec().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }
    getDrugIdByName(drugname){
        return new Promise((resolve,reject) =>{
           
            this.unitOfWork.drugsSchema. find({drugName:drugname},{_id:true}).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }

    updateDrug(name,data){
        return new Promise((resolve,reject)=>{
            
            this.unitOfWork.drugsSchema. update({drugName:name}, data).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        })
    }
    getDrugPrice(drugId){
        return new Promise((resolve,reject)=>{

            this.unitOfWork.drugsSchema.find({_id: drugId},{_id:false}).then(data =>{
                resolve(data);
            }).catch(err =>{
                reject(err);
            })
        });
    }
    
}

module.exports = new DrugService();