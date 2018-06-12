const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const prescriptionDrugsSchema = new Schema({
    presID: [{
        type: Schema.Types.ObjectId,
        ref: 'PresciptionSchema'
    }],
    drugID: [{
        type: Schema.Types.ObjectId,
        ref: 'DrugsSchema'
    }],
    quantity: {
        type: Number,
        require: true
    }
});

module.exports = prescriptionDrugsSchema;