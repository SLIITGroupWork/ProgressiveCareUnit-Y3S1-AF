
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientRegistrationSchema = new Schema({
    referenceNo: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
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
    isTreated: {
        type: Boolean,
        default: false
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
    isMappedToUser: {
        type: Boolean,
        default: false
    },
    registeredTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = PatientRegistrationSchema;