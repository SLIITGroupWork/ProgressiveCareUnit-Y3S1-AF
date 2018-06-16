const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tableNames = require('../table-names.const');

const patientPhysicalExamsSchema = new Schema({

    patientId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.PatientRegistrations,
        require: true
    },

    examName: {
        type: String,
        require: true
    },

    examType: {
        type: String,
        require: true
    },

    examDescription: {
        type: String,
        require: true
    }
});


module.exports = patientPhysicalExamsSchema;