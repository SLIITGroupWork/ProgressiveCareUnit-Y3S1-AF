const patientStatus = require('../consts/patient-status');
const unitOfWork = require('../data-access/unit-of-work');

class PatientRegistrationService {

    getAllPatientRegistrations() {

        return new Promise((resolve, reject) => {

            unitOfWork.patientRegistrationSchema.find().exec().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }

    addNewPatientRegistration(patientRegistrationData) {

        return new Promise((resolve, reject) => {

            let patient = new unitOfWork.patientRegistrationSchema({
                name: patientRegistrationData.name,
                description: patientRegistrationData.description,
                contact: patientRegistrationData.contact,
                status: (patientRegistrationData.status) ? patientRegistrationData.status : patientStatus.INWARD
            });

            patient.save().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = new PatientRegistrationService();