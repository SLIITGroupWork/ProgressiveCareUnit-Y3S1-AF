const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tableNames = require('../table-names.const');

const PatientAllergiesSchema = new Schema({

    patientId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.Users,
        require: true
    },

    patientName: {
        type: Schema.Types.ObjectId,
        ref: tableNames.PatientRegistrations,
        require: true
    },

    allergyType: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    }

});

module.exports = PatientAllergiesSchema;