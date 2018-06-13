const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const prescriptionDrugsSchema = new Schema({
    regId:[{
        type:Schema.Types.ObjectId,
        ref:tableNames.PatientRegistrationSchema,
        require:true

    }],
    presID: [{
        type: Schema.Types.ObjectId,
        ref: tableNames.presciptionSchema,
        reqiure:true
    }],
    drugID: [{
        type: Schema.Types.ObjectId,
        ref: tableNames.DrugsSchema,
        require:ture
    }],
    quantity: {
        type: Number,
        require: true
    }
});

module.exports = prescriptionDrugsSchema;