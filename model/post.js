const mongoose = require("mongoose");
const validator = require("validator");

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        // required: true,
    },
    file:{
        type: Object,
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
    },time : { 
        type: Date, 
        default: (new Date()).getTime() 
    }
},{timeStamp:true}
);
const Post= mongoose.model("Post",postSchema);
module.exports = Post

