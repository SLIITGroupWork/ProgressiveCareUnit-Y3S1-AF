
const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const PatientRegistrationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        type: String
    },
    patientStatus: {
        type: String,
        required: true
    },
    patientGender: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    registeredTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = PatientRegistrationSchema;