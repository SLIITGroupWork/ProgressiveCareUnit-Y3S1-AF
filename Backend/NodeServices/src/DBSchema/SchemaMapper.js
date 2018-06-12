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
const PresciptionSchema = new Schema({
    patientId: {
        type: String,
        require: true
    },
    doctorId: {
        type: String,
        require: true
    },
    date:{
        type:Date,
        require:true
    }    
});

const DrugsSchema = new Schema({
    drugName:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }

});
const prescriptionDrugsSchema = new Schema({
    presID:[{
        type:Schema.Types.ObjectId,
        ref:'PresciptionSchema'
    }],
    drugID:[{
        type:Schema.Types.ObjectId,
        ref:'DrugsSchema'
    }],
    quantity:{
        type:Number,
        require:true
    }

});
Mongoose.model('Comment', CommentSchema);
Mongoose.model('Presciption', PresciptionSchema);
Mongoose.model('drugs', DrugsSchema);
Mongoose.model('prescriptionDrugs', prescriptionDrugsSchema);

Mongoose.connect('mongodb://localhost:27017/comments', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the Database');
});

module.exports = Mongoose;