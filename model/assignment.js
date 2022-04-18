const mongoose = require("mongoose");
const validator = require("validator");

const assignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    Description:{
        type:String,
        required:true
    },
    time : { 
        type: Number, 
        default: (new Date()).getTime() 
    },
    file:{
        type: String,
    },
    points:{
        type:Number,
    },
    duedate:{
        type: Number, 
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
    }
},{timeStamp:true}
);
const Assignment= mongoose.model("Assignment",assignmentSchema);
module.exports = Assignment

