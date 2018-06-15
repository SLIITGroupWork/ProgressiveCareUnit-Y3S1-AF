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
}

module.exports = new DoctorController();