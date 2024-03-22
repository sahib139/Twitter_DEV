const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required: true,
    },
    userEmail:{
        type:String,
    }, 
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
        }
    ]
},{timestamps:true});

const Comment = new mongoose.model('Comment' , commentSchema);

module.exports=Comment;