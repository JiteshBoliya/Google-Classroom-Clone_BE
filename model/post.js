const mongoose = require("mongoose");
const validator = require("validator");

const postSchema = new mongoose.Schema({
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
    // file:{
    //     type: String,
    //     trim: true,
    // },
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
const Post= mongoose.model("Post",postSchema);
module.exports = Post

