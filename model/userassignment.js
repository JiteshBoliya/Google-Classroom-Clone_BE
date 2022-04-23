const mongoose = require("mongoose");
const validator = require("validator");

const userAssignmentSchema = new mongoose.Schema({
    time : { 
        type: Number, 
        default: (new Date()).getTime() 
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'User'
    },
    assignment:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'Assignment'
    },
    status:{
        type:String,
        default:'Assigned'
        //Assigned,Hand In,missing,marked
    },
    marks:{
        type:Number,
        default:0
    },
    file:[{
        type: Object,
    }]
},{timeStamp:true}
);
const UserAssignment= mongoose.model("userAssignment",userAssignmentSchema);
module.exports = UserAssignment

