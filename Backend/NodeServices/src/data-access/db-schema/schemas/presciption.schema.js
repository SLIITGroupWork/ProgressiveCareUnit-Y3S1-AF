const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const presciptionSchema = new Schema({
    patientId: {
        type: String,
        require: true
    },
    doctorId: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    }
});

module.exports = presciptionSchema;