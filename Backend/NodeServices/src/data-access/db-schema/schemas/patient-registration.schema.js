
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
    status: {
        type: String,
        required: true
    },
    registeredTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = PatientRegistrationSchema;