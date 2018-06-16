const BaseService = require('../base/services/base.service');
const patientRegistrationConsts = require('../consts/patient-registration.consts');

class PatientRegistrationService extends BaseService {

    _getPatientRegistrationsCount() {

        return new Promise((resolve, reject) => {

            this.unitOfWork.patientRegistrationSchema.count().then(count => {
                resolve(count ? count : 0);
            }).catch(err => {
                reject(err);
            });
        });
    }

    _getUserByNIC(nic) {

        return new Promise((resolve, reject) => {

            this.unitOfWork.userSchema.findOne({ nic: nic.toUpperCase() }, { _id: true }).exec().then(user => {
                resolve(user);
            }).catch(err => {
                reject(err);
            });
        });
    }

    getAllPatientRegistrations() {

        return new Promise((resolve, reject) => {

            this.unitOfWork.patientRegistrationSchema.find().exec().then(patients => {
                resolve(patients);
            }).catch(err => {
                reject(err);
            });
        });
    }

    getPatientRegistrationById(id) {

        return new Promise((resolve, reject) => {

            this.unitOfWork.patientRegistrationSchema.findOne({ _id: id }).exec().then(patient => {
                resolve(patient);
            }).catch(err => {
                reject(err);
            });
        });
    }

    getPatientRegistrationByReferenceNo(referenceNo) {

        return new Promise((resolve, reject) => {

            this.unitOfWork.patientRegistrationSchema.findOne({ referenceNo: referenceNo }).exec().then(patient => {
                resolve(patient);
            }).catch(err => {
                reject(err);
            });
        });
    }

    getPatientRegistrationsByMappedStatus(status = false) {

        return new Promise((resolve, reject) => {

            status = (status) ? true : false;

            this.unitOfWork.patientRegistrationSchema.find({ isMappedToUser: status }).exec().then(patients => {
                resolve(patients);
            }).catch(err => {
                reject(err);
            });
        });
    }

    addNewPatientRegistration(patientRegistrationData) {

        return new Promise((resolve, reject) => {

            this._getPatientRegistrationsCount().then(count => {

                let timeStamp = Math.floor(Date.now() / 1000).toString();
                let divideIndex = timeStamp.length - 6;

                let referenceNo = `${timeStamp.substr(0, divideIndex)}-${timeStamp.substr(divideIndex + 1, timeStamp.length - 2)}-${timeStamp.substr(timeStamp.length - 1)}${count + 1}-${Math.floor(Math.random() * 1000)}`;

                let patient = new this.unitOfWork.patientRegistrationSchema({
                    referenceNo: referenceNo,
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
            }).catch(err => {
                reject(err);
            });
        });
    }

    updatePatientRegistration(patientRegistrationData) {

        return new Promise((resolve, reject) => {

            this.unitOfWork.patientRegistrationSchema.findOneAndUpdate(
                { referenceNo: patientRegistrationData.referenceNo },
                {
                    name: patientRegistrationData.name,
                    description: patientRegistrationData.description,
                    contact: patientRegistrationData.contact,
                    patientStatus: (patientRegistrationData.patientStatus) ? patientRegistrationData.patientStatus : patientRegistrationConsts.patientStatus.INWARD,
                    patientGender: patientRegistrationData.patientGender,
                    isTreated: patientRegistrationData.isTreated,
                    priority: patientRegistrationData.priority
                }
            ).then(patient => {

                patient.name = patientRegistrationData.name;
                patient.description = patientRegistrationData.description;
                patient.contact = patientRegistrationData.contact;
                patient.patientStatus = (patientRegistrationData.patientStatus) ? patientRegistrationData.patientStatus : patientRegistrationConsts.patientStatus.INWARD;
                patient.patientGender = patientRegistrationData.patientGender;
                patient.isTreated = patientRegistrationData.isTreated;
                patient.priority = patientRegistrationData.priority;

                resolve(patient);
            }).catch(err => {
                reject(err);
            });
        });
    }

    assignUserToPatientRegistration(userPatientRegistrationData) {

        return new Promise((resolve, reject) => {

            this.getPatientRegistrationByReferenceNo(userPatientRegistrationData.registerReferenceNo).then(patientRegistration => {

                if (patientRegistration) {

                    this._getUserByNIC(userPatientRegistrationData.userNic).then(user => {

                        if (user) {

                            let userPatientRegistrationSchema = new this.unitOfWork.userPatientRegistrationSchema({
                                userId: user._id,
                                patientRegistrationId: patientRegistration._id
                            });

                            userPatientRegistrationSchema.save().then(data => {

                                this.unitOfWork.patientRegistrationSchema.findOneAndUpdate({ _id: patientRegistration._id }, { isMappedToUser: true }, err => {

                                    if (err) {
                                        resolve(err);
                                    }
                                    else {
                                        resolve(userPatientRegistrationData);
                                    }
                                });
                            }).catch(err => {
                                reject(err);
                            });
                        }
                        else {
                            resolve(null);
                        }
                    })
                }
                else {
                    resolve(null);
                }
            }).catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = new PatientRegistrationService();