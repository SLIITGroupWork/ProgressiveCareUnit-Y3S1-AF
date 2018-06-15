const BaseService = require('../base/services/base.service');
const Doctor = require('./doctor.service');
const doctorConsts = require('../consts/doctor.consts');

class DoctorPatientService extends BaseService {

    addDoctorPatient(doctorPatient) {
        return new Promise((resolve, reject) => {
            let doctorPatient = new this.unitOfWork.doctorPatientSchema({
                doctorId: doctorPatient.doctorId,
                patientId: doctorPatient.patientId,
                isTreated: false
            });
            doctorPatient.save().then(() => {
                Doctor.updateDoctorsStatus(doctorPatient.doctorId, doctorConsts.doctorStatus.INTREATMENT)
                .then(() => {
                    Doctor.updatePatientIsTreated(doctorPatient.patientId, true).then(() => {
                        resolve({message: "Doctor-Patient Inserted"});
                    }).catch((err) => {
                        reject({message: err});
                    });
                }).catch((err) => {
                    reject({message: err});
                });
            }).catch((err) => {
                reject({message: err});
            });
        });
    }

    updateDoctorPatientStatus(id, treated) {
        return new Promise((resolve, reject) => {
            this.unitOfWork.doctorPatientSchema.update({ _id: id },{ $set:{ isTreated: treated }
            }).then(() => {
                resolve({message: "Status is Updated"});
            }).catch((err) => {
                reject({message: err});
            });
        });
    }

    getDoctorPatientTreating() {
        return new Promise((resolve, reject) => {
            this.unitOfWork.doctorPatientSchema.find({ isTreated: false}).exec().then((data) => {
                resolve({data: data});
            }).catch((err) => {
                reject({message: err});
            });
        });
    }
}

module.exports = new DoctorPatientService();