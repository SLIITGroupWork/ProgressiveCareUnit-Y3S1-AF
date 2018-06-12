var mongoose        = require('../DBSchema/SchemaMapper');
var PresciptionSchema   = mongoose.model('PresciptionSchema');

var PresciptionController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var prescription = new PresciptionController({
                patientId:data.patientId,
                doctorId:data.doctorId,
                date: new Date(year, month, day),
            });
            prescription.save().then(() => {
                resolve({status: 200, message: "Added new prescription"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            });
        });
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            PresciptionSchema.find().populate('User').exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    }
    this.searchOne = (id) => {
        return new Promise((resolve, reject) => {
            PresciptionSchema.find({patientId:id}).populate('User').exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        })
    }
    this.update = (id, body) => {
        return new Promise((resolve, reject) => {
            PresciptionSchema.update({patientId:id}, body).then(data => {
                resolve({status: 200, message:"Updated."});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    }
}

module.exports = new PresciptionController();

