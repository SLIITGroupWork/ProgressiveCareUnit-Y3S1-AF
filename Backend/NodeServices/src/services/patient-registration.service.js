const BaseService = require('../base/services/base.service');
const patientRegistrationConsts = require('../consts/patient-registration.consts');

class PatientRegistrationService extends BaseService {

    getAllPatientRegistrations() {

        return new Promise((resolve, reject) => {

            this.unitOfWork.patientRegistrationSchema.find().exec().then(patients => {
                resolve(patients);
            }).catch(err => {
                reject(err);
            });
        });
    }

    addNewPatientRegistration(patientRegistrationData) {

        return new Promise((resolve, reject) => {

            let patient = new this.unitOfWork.patientRegistrationSchema({
                name: patientRegistrationData.name,
                description: patientRegistrationData.description,
                contact: patientRegistrationData.contact,
                patientStatus: (patientRegistrationData.patientStatus) ? patientRegistrationData.patientStatus : patientRegistrationConsts.patientStatus.INWARD,
                patientGender: patientRegistrationData.patientGender,
                priority: patientRegistrationData.priority
            });

            patient.save().then(patient => {
                resolve(patient);
            }).catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = new PatientRegistrationService();