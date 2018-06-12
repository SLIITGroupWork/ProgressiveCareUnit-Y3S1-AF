const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nic: {
        type: String,
        required: true,
        unique: true,
        index: true
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
    mobile: {
        type: String,
        required: true
    },
    registeredTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = userSchema;