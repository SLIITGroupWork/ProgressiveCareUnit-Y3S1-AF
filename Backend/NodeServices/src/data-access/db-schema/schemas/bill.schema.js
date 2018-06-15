const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const tableNames = require('../table-names.const');

const billSchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.PatientRegistrations,
        require: true
    },
    drugPrice: {
        type: Number,
        require: true
    },
    hospitalCharges:{
        type:Number,
        require:true
    },
    laboraryCharges:{
        type:Number,
        require:true
    },
    OtherCharges:{
        type:Number,
        require:true
    }

});

module.exports = billSchema;