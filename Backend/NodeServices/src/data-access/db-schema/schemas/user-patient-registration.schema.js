const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tableNames = require('../table-names.const');

const userPatientRegistrationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.Users,
        require: true
    },
    patientRegistration: {
        type: Schema.Types.ObjectId,
        ref: tableNames.PatientRegistrations,
        require: true
    }
});

userPatientRegistrationSchema.index({ userId: 1, patientRegistration: -1 }, { unique: true })

module.exports = userPatientRegistrationSchema;