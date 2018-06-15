const BaseController = require('../base/controllers/base.controller');
const patientRegistrationService = require('../services/patient-registrations.service');

class PatientRegistrationController extends BaseController {

    getAllPatientRegistrations() {

        return new Promise((resolve, reject) => {

            patientRegistrationService.getAllPatientRegistrations().then(patients => {
                resolve(this.createResponse(this.statusCodes.OK, patients));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    getPatientRegistrationById(patientId) {

        return new Promise((resolve, reject) => {

            patientRegistrationService.getPatientRegistrationById(patientId).then(patient => {
                resolve(this.createResponse(this.statusCodes.OK, patient));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    insertPatientRegistration(patientRegistrationRequest) {

        return new Promise((resolve, reject) => {

            patientRegistrationService.addNewPatientRegistration(patientRegistrationRequest.data).then(bill => {
                resolve(this.createResponse(this.statusCodes.Created, bill));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }
}

module.exports = new PatientRegistrationController();