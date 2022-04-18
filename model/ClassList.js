const mongoose = require("mongoose");

const classListSchema = new mongoose.Schema({
    class:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'Class'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timeStamp:true}
);
const ClassList= mongoose.model("ClassList",classListSchema);
module.exports = ClassList

