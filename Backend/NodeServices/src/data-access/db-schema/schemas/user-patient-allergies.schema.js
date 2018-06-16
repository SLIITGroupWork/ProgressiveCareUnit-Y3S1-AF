const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tableNames = require('../table-names.const');

const userPatientAllergiesSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:tableNames.Users,
        require:true
    },

    allergyId:{
        type:Schema.Types.ObjectId,
        ref:tableNames.PatientAllergies,
        require:true
    },
   


})

module.exports= userPatientAllergiesSchema;