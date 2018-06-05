var mongoose        = require('../DBSchema/SchemaMapper');
var commentSchema   = mongoose.model('Comment');

var CommentController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var comment = new commentSchema({
                comment: data.comment,
                date: new Date(year, month, day),
            });
            comment.save().then(() => {
                resolve({status: 200, message: "Added new comment"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            commentSchema.find().populate('User').exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
}

module.exports = new CommentController();