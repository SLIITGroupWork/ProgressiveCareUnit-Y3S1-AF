const BaseService = require('../base/services/base.service');
const doctorPatientConsts = require('../consts/doctor-patient.consts');

class DoctorPatientService extends BaseService {

    addDoctorPatient(doctorPatient) {
        return new Promise((resolve, reject) => {
            let doctorPatient = new this.unitOfWork.doctorPatientSchema({
                doctorId: doctorPatient.doctorId,
                patientId: doctorPatient.patientId,
                treatmentStatus: doctorPatientConsts.treatmentStatus.TREATING
            });
            doctorPatient.save().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }

    updateDoctorPatientStatus(id, status) {
        return new Promise((resolve, reject) => {
            this.unitOfWork.doctorPatientSchema.update({ _id: id },{ $set:{ treatmentStatus: status }
            }).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getDoctorPatientTreating() {
        return new Promise((resolve, reject) => {
            this.unitOfWork.doctorPatientSchema.find({ treatmentStatus: doctorPatientConsts.treatmentStatus.TREATING 
            }).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = new DoctorPatientService();