const mongoose = require("mongoose");
const validator = require("validator");

const assignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true,
    },
    description:{
        type:String,
        // required:true
    },
    time : { 
        //uploaded time
        type: Number, 
        default: (new Date()).getTime() 
    },
    points:{
        type:Number,
    },
    duedate:{
        type: Date, 
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'User'
    },
    classsub:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'Class'
    },
    file:[{
        type: Object,
    }]
},{timeStamp:true}
);
const Assignment= mongoose.model("Assignment",assignmentSchema);
module.exports = Assignment

