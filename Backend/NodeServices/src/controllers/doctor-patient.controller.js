const BaseController = require('../base/controllers/base.controller');
const doctorPatientService = require('../services/doctor-patient.service');

class DoctorPatientController extends BaseController {

    addDoctorPatient(doctorPatient) {
        return new Promise((resolve, reject) => {
            doctorPatientService.addDoctorPatient().then((data) => {
                resolve(this.createResponse(this.statusCodes.Created, data));
            }).catch((err) => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    getDoctorPatientTreating() {
        return new Promise((resolve, reject) => {
            doctorPatientService.getDoctorPatientTreating().then((data) => {
                resolve(this.createResponse(this.statusCodes.OK, data));
            }).catch((err) => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }
}

module.exports = new DoctorPatientController();