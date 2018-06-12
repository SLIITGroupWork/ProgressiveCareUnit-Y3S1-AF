var mongoose        = require('../DBSchema/SchemaMapper');
var DrugSchema   = mongoose.model('drugs');

var DrugController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var Drug = new DrugController({
                drugName:data.drugname,
                price:data.price
            });
            Drug.save().then(() => {
                resolve({status: 200, message: "Added new Drug"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            });
        });
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            DrugSchema.find().populate('User').exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    }
    this.searchOne = (name) => {
        return new Promise((resolve, reject) => {
            DrugSchema.find({drugName:name}).populate('User').exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        })
    }
    this.update = (name, body) => {
        return new Promise((resolve, reject) => {
            DrugSchema.update({drugName:name}, body).then(data => {
                resolve({status: 200, message:"Updated Drug."});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    }
}

module.exports = new DrugController();

