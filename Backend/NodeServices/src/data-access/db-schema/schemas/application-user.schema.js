const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const tableNames = require('../table-names.const');

const applicationUserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        index: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    },
    userLevel: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: tableNames.Users,
        require: true
    }
});

module.exports = applicationUserSchema;