const BaseController = require('../base/controllers/base.controller');
const doctorService = require('../services/doctor.service');

class DoctorController extends BaseController {

    getAllDoctors() {
        return new Promise((resolve, reject) => {
            doctorService.getAllDoctors().then((data) => {
                resolve(this.createResponse(this.statusCodes.OK, data));
            }).catch((err) => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }
            
    getDoctorById(id) {
        return new Promise((resolve, reject) => {
            doctorService.getDoctorById(id).then((data) => {
                resolve(this.createResponse(this.statusCodes.OK, data));
            }).catch((err) => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    addDoctor(doctor) {
        return new Promise((resolve, reject) => {
            doctorService.addDoctors(doctor).then((data) => {
                resolve(this.createResponse(this.statusCodes.Created, data));
            }).catch((err) => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    getDoctorsByStatus(status) {
        return new Promise((resolve, reject) => {
            doctorService.getDoctorsByStatus(status).then((data) => {
                resolve(this.createResponse(this.statusCodes.OK, data));
            }).catch((err) => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    getNotTreatedPatient() {
        return new Promise((resolve, reject) => {
            doctorService.getNotTreatedPatient().then((data) => {
                resolve(this.createResponse(this.statusCodes.OK, data));
            }).catch((err) => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }

    getNextPatient() {
        return new Promise((resolve, reject) => {
            doctorService.getNextPatient().then((data) => {
                resolve(this.createResponse(this.statusCodes.OK, data));
            }).catch((err) => {
                reject(this.createResponse(this.statusCodes.InternalServerError, [], err));
            });
        });
    }
}

module.exports = new DoctorController();