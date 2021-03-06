const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tableNames = require('../table-names.const');

const presciptionSchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.PatientRegistrations,
        require: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.Doctor,
        require: true
    },
    date: {
        type: Date,
        require: true
    }
});

module.exports = presciptionSchema;