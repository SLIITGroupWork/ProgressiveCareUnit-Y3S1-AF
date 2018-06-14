const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    nic: {
        type: String,
        require: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    doctorStatus: {
        type: String,
        require: true
    },
    specialization : {
        type: String,
        require: false
    }
});

module.exports = doctorSchema;