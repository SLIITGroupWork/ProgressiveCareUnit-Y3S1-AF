const Mongoose  = require('mongoose');
const Schema = Mongoose.Schema;

const CommentSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    }
});

Mongoose.model('Comment', CommentSchema);

Mongoose.connect('mongodb://localhost:27017/comments', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the Database');
});

module.exports = Mongoose;