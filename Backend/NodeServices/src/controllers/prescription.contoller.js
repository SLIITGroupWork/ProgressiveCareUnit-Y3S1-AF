const BaseController = require('../base/controllers/base.controller');
const prescriptionService = require('../services/prescription.service');

class prescriptionController extends BaseController {

    getPescription(patientName,date) {

        return new Promise((resolve, reject) => {

            prescriptionService.getPrescription(patientName.data,date.data).then(prescription => {
                resolve(this.createResponse(this.statusCodes.OK, prescription));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    addPrescription(prescriptionData) {

        return new Promise((resolve, reject) => {

            prescriptionService.addNewPrescription(prescriptionData.data).then(data => {
                resolve(this.createResponse(this.statusCodes.Created, data));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    updatePrescription(patientID,prescriptionData) {

        return new Promise((resolve, reject) => {

            prescriptionService.updatePrescription(patientID,prescriptionData.data).then(data => {
                resolve(this.createResponse(this.statusCodes.OK, data));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }
}

module.exports = new prescriptionController();