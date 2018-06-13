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
    doctorStatus: {
        type: String,
        require: true
    },
    priority: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
});

module.exports = doctorSchema;