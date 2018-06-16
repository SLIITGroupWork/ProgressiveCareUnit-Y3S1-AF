const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tableNames = require('../table-names.const');

const doctorPatientSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.Doctor,
        require: true
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.PatientRegistrations,
        require: true
    },
    isTreated: {
        type: Boolean,
        require: true
    }
});

module.exports = doctorPatientSchema;