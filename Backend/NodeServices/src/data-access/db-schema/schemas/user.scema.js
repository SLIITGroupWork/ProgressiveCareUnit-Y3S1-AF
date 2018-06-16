const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nic: {
        type: String,
        required: true,
        unique: true,
        index: true,
        uppercase: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    contact: {
        type: String
    },
    registeredTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = userSchema;