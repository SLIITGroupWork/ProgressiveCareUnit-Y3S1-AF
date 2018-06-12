const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const DrugsSchema = new Schema({
    drugName: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
});

module.exports = DrugsSchema;