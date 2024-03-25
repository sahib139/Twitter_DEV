import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required: true,
    },
    onModel:{
        type:String,
        require:true,
        enum:["Tweet","Comment"],
    },
    commentable:{
        type:mongoose.Schema.Types.ObjectId,
        refPath:"onModel",
        require:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
        }
    ]
},{timestamps:true});

const Comment = mongoose.model('Comment' , commentSchema);

export default Comment;