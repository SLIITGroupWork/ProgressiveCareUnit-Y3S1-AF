const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tableNames = require('../table-names.const');

const PatientAllergiesSchema = new Schema({

<<<<<<< HEAD
   allergyName:{
       type:String,
       require:true
   },

    allergyType:{
        type:String,
        require:true
=======
    patientId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.Users,
        require: true
    },

    patientName: {
        type: Schema.Types.ObjectId,
        ref: tableNames.PatientRegistrations,
        require: true
    },

    allergyType: {
        type: String,
        require: true
>>>>>>> 935dad50262cfc2ea77c9bf7eb795e694485c1a8
    },

    description: {
        type: String,
        require: true
    }

});

module.exports = PatientAllergiesSchema;