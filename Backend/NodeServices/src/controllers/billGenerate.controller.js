const BaseController = require('../base/controllers/base.controller');
const billService = require('../services/bill.service');
const billGenerateService = require('../services/billGenerate.service');

class PatientRegistrationController extends BaseController {

    getBillDetails(patientId) {

        return new Promise((resolve, reject) => {

            billService.getBillDetailsByPatientId(patientId).then(billDeatils => {
                resolve(this.createResponse(this.statusCodes.OK, billDeatils));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    insertBillDetails(billRequest) {

        return new Promise((resolve, reject) => {

            billService.addBillDetails(billRequest.data).then(bill => {
                resolve(this.createResponse(this.statusCodes.Created, bill));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }
    updateBillDetails(patientId,billRequest) {

        return new Promise((resolve, reject) => {

            billService.updateBillDetails(patientId,billRequest.data).then(bill => {
                resolve(this.createResponse(this.statusCodes.Created, bill));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }
    searchAllBillDetails(){
        return new Promise((resolve, reject) => {

            billService.getAllBillDetails().then(bill => {
                resolve(this.createResponse(this.statusCodes.OK, bill));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }
    generateBill(patientId,startdate,endDate){
        return new Promise((resolve, reject) => {

            billService.generateTotalBill(patientId,startdate,endDate).then(bill => {
                resolve(this.createResponse(this.statusCodes.Created, bill));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }
    
}

module.exports = new PatientRegistrationController();