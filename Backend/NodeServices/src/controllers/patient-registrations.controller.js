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

    getUnassignedPatientRegistrations() {

        return new Promise((resolve, reject) => {

            patientRegistrationService.getPatientRegistrationsByMappedStatus().then(patients => {
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

    getPatientRegistrationByReferenceNo(referenceNo) {

        return new Promise((resolve, reject) => {

            patientRegistrationService.getPatientRegistrationByReferenceNo(referenceNo).then(patient => {
                resolve(this.createResponse(this.statusCodes.OK, patient));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    addNewPatientRegistration(patientRegistrationRequest) {

        return new Promise((resolve, reject) => {

            patientRegistrationService.addNewPatientRegistration(patientRegistrationRequest.data).then(bill => {
                resolve(this.createResponse(this.statusCodes.Created, bill));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    updatePatientRegistration(patientRegistrationRequest) {

        return new Promise((resolve, reject) => {

            patientRegistrationService.updatePatientRegistration(patientRegistrationRequest.data).then(patient => {
                if (patient) {
                    resolve(this.createResponse(this.statusCodes.OK, patient));
                }
                else {
                    resolve(this.createResponse(this.statusCodes.BadRequest, null, "Invaild reference no"));
                }
            }).catch(err => {

                console.log(err);
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    assignUserToPatientRegistration(userPatientRegistrationDataRequest) {

        return new Promise((resolve, reject) => {

            patientRegistrationService.assignUserToPatientRegistration(userPatientRegistrationDataRequest.data).then(userPatientRegistrationData => {

                if (userPatientRegistrationData) {
                    resolve(this.createResponse(this.statusCodes.OK, userPatientRegistrationData));
                }
                else {
                    resolve(this.createResponse(this.statusCodes.BadRequest, null, "NIC or Reference invalid"));
                }
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }
}

module.exports = new PatientRegistrationController();