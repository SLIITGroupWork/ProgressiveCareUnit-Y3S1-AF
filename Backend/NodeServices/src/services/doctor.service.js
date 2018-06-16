const BaseService = require('../base/services/base.service');
const doctorConsts = require('../consts/doctor.consts');

class DoctorService extends BaseService {

    getAllDoctors() {
        return new Promise((resolve, reject) => {
            this.unitOfWork.doctorSchema.find().exec().then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getDoctorById(id) {
        return new Promise((resolve, reject) => {
            this.unitOfWork.doctorSchema.findOne({ _id:id}).exec().then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    addDoctors(doctor) {
        return new Promise((resolve, reject) => {
            let doctor = new this.unitOfWork.doctorSchema({
                firstName: doctor.firstName,
                lastName: doctor.lastName,
                nic: doctor.nic,
                phoneNumber: doctor.phoneNumber,
                doctorStatus: doctorConsts.doctorStatus.NOTAVAILABLE,
                specialization: doctor.specialization
            });
            doctor.save().then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    updateDoctorsStatus(id, status) {
        return new Promise((resolve, reject) => {
            this.unitOfWork.doctorSchema.update({ _id: id },{ $set:{ doctorStatus: status }
            }).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    updatePatientIsTreated(id, treated) {
        return new Promise((resolve, reject) => {
            this.unitOfWork.patientRegistrationSchema.update({ _id: id },{ $set:{ isTreated: treated }
            }).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getDoctorsByStatus(status) {
        return new Promise((resolve, reject) => {
            this.unitOfWork.doctorSchema.find({ doctorStatus: status }).exec().then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getNotTreatedPatient() {
        return new Promise((resolve, reject) => {
            this.unitOfWork.patientRegistrationSchema.find({ isTreated: false }).exec().then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getNextPatient() {
        return new Promise((resolve, reject) => {
            this.unitOfWork.patientRegistrationSchema.findOne({ isTreated: false },{$orderby: { priority : -1 }})
            .exec().then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = new DoctorService();