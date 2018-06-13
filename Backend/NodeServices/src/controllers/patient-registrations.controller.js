const BaseController = require('../base/controllers/base.controller');
const patientRegistrationService = require('../services/patient-registration.service');

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

    insertPatientRegistration(patientRegistrationData) {

        return new Promise((resolve, reject) => {

            let request = this.createRequest(patientRegistrationData);

            patientRegistrationService.addNewPatientRegistration(request.data).then(patient => {
                resolve(this.createResponse(this.statusCodes.Created, patient));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }
}

module.exports = new PatientRegistrationController();