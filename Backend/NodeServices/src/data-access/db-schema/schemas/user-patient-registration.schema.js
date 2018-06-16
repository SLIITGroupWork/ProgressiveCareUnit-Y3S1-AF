const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tableNames = require('../table-names.const');

const userPatientRegistrationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.Users,
        require: true
    },
    patientRegistrationId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.PatientRegistrations,
        require: true,
        unique: true
    }
});

module.exports = userPatientRegistrationSchema;