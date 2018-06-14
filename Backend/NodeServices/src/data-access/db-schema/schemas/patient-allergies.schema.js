const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const PatientAllergiesSchema = new Schema({
    patientId :{
        type:String,
        require:true
    },
    patientName :{
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