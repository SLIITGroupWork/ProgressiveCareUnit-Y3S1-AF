const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const patientPhysicalExamsSchema= new Schema({

    examName:{
        type:String,
        require:true
    },
    
    examType:{
        type:String,
        require:true
    },

    examDescription:{
        type:String,
        require:true
    }
});


module.exports=patientPhysicalExamsSchema;