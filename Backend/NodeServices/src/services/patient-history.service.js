const BaseService = require('../base/services/base.service');

class PatientHistoryService extends BaseService {
    getPatientHistory(patientId) {
        return new Promise((resolve, reject) => {

        })
    }
}

module.exports = new PatientHistoryService();