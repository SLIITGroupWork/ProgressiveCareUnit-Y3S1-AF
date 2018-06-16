const BaseService = require('../base/services/base.service');

// getAllDrugDetails() {

//     return new Promise((resolve, reject) => {

//         this.unitOfWork.drugsSchema.find().exec().then(data => {
//             resolve(data);
//         }).catch(err => {
//             reject(err);
//         });
//     });
// }

// addNewDrug(drugData) {

//     return new Promise((resolve, reject) => {

//         let drug = new this.unitOfWork.drugsSchema({
//             drugName: drugData.drugname,
//             price: drugData.price,
            
//         });

//         drug.save().then(data => {
//             resolve(data);
//         }).catch(err => {
//             reject(err);
//         });
//     });
// }

// getDrugByName(drugname){
//     return new Promise((resolve,reject) =>{
       
//         this.unitOfWork.drugsSchema. find({drugName:drugname}).populate('User').exec().then(data => {
//             resolve(data);
//         }).catch(err => {
//             reject(err);
//         });
//     });
// }


class PatientPhysicalExamsService extends BaseService{

    getAllPhysicalExamsDetail(){
        return new Promise((resolve,reject)=>{
            this.unitOfWork.patientAllergiesSchema.find().exec().then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })
    }

    getPhysicalExamById(id){
        return new Promise((resolve,reject)=>{
            this.unitOfWork.patientPhysicalExamsSchema.find({_id:id}).exec().then(data=>{
                resolve(data);
            }).catch(err=>{
                reject(err);
            })
        })()
    }

    insertNewPhysicalExam(examdata){
        return new Promise((resolve,reject)=>{
            let physicalExam= new this.unitOfWork.patientPhysicalExamsSchema({
                    patientId:examdata.patientId,
                    examName:examdata.examName,
                    examType:examdata.examType,
                    examDescription:examdata.examDescription
                });
                physicalExam.save().then(data=>{
                    resolve(data);
                }).catch(err=>{
                    reject(err);
                })
            })
    
    }
}

module.exports = new PatientPhysicalExamsService();