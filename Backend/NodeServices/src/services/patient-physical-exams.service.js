const BaseService = require('../base/services/base.service');

class PatientPhysicalExamsService extends BaseService {

    getAllPhysicalExamsDetail() {
        return new Promise((resolve, reject) => {
            this.unitOfWork.patientAllergiesSchema.find().exec().then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            })
        })
    }

    getPhysicalExamById(id) {
        return new Promise((resolve, reject) => {
            this.unitOfWork.patientPhysicalExamsSchema.find({ _id: id }).exec().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })()
    }

    insertNewPhysicalExam(examdata) {
        return new Promise((resolve, reject) => {
            let physicalExam = new this.unitOfWork.patientPhysicalExamsSchema({
                patientId: examdata.patientId,
                examName: examdata.examName,
                examType: examdata.examType,
                examDescription: examdata.examDescription
            });
            physicalExam.save().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })

    }
}

module.exports = new PatientPhysicalExamsService();