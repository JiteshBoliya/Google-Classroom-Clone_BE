const mongoose = require("mongoose");
const validator = require("validator");

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        trim: true,
        validate(value){
            if(!validator.isAlpha(value)) throw new Error("Invalid name")
        }
    },
    code:{
        type:String,
        // required:true
    },
    subject:{
        type: String,
        trim: true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'User'
    }
},{timeStamp:true}
);
const Class= mongoose.model("Class",classSchema);
module.exports = Class

