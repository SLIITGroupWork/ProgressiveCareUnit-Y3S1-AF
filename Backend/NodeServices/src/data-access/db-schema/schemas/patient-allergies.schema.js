const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const tableNames =require('../table-names.const');

const PatientAllergiesSchema = new Schema({

   allergyName:{
       type:String,
       require:true
   },

    allergyType:{
        type:String,
        require:true
    },

    description:{
        type:String,
        require:true
    }

});

module.exports= PatientAllergiesSchema;