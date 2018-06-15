const BaseController = require('../base/controllers/base.controller');
const patientPhysicalExamsService = require('../services/patient-allergies.service');

class PatientPhysicalExamController extends BaseController{
    getAllPhysicalExamsDetail(){
        return new Promise((resolve,reject)=>{
            patientPhysicalExamsService.getAllPhysicalExamsDetail().then(data=>{
                resolve(this.createResponse(this.statusCodes.OK,true,data));
            }).catch(err=>{
                resolve(this.createResponse(this.statusCodes.InternalServerError,false,[],err));
            })
        })
    }
    getPhysicalExamById(examId){
        return new Promise((resove,reject)=>{
            patientPhysicalExamsService.getPhysicalExamById(examId).then(data=>{
                resolve(this.createResponse(this.statusCodes.OK),data);
            }).catch(err=>{
                resolve(this.createResponse(this.statusCodes.InternalServerError,false,[],err));
            })
        })
    }
    insertNewPhysicalExam(examdata){
        return new Promise((resolve,reject)=>{
            patientPhysicalExamsService.insertNewPhysicalExam(examdata.data).then(data=>{
                resolve(this.createResponse(this.statusCodes.OK,true,data));
            }).catch(err=>{
                reject(this.createResponse(this.statusCodes.InternalServerError, false, [], err));
            })
        })
    }
}

module.exports = new PatientPhysicalExamController();