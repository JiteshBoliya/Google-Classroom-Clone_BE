const mongoose = require("mongoose");
const validator = require("validator");

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    time : { 
        type: Number, 
        default: (new Date()).getTime() 
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'User'
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'Post'
    }
},{timeStamp:true}
);
const Comment= mongoose.model("Comment",commentSchema);
module.exports = Comment

