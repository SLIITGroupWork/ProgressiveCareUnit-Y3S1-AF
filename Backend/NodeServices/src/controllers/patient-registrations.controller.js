const BaseController = require('../base/controllers/base.controller');
const patientRegistrationService = require('../services/patient-registration.service');

class PatientRegistrationController extends BaseController {

    getAllPatientRegistrations() {

        return new Promise((resolve, reject) => {

            patientRegistrationService.getAllPatientRegistrations().then(data => {
                resolve(this.createResponse(this.statusCodes.OK, true, data));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, false, [], err));
            });
        });
    }

    insertPatientRegistration(patientRegistrationData) {

        return new Promise((resolve, reject) => {

            let request = this.createRequest(patientRegistrationData);

            patientRegistrationService.addNewPatientRegistration(request.data).then(data => {
                resolve(this.createResponse(this.statusCodes.Created, true, data));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, false, [], err));
            });
        });
    }
}

module.exports = new PatientRegistrationController();