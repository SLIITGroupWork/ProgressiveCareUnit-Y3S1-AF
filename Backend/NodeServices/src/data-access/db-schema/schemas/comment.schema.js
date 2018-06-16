const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    }
});

module.exports = commentSchema;