import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
    onModel:{
        type:String,
        require:true,
        enum:['Tweet','Comment'],
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        refPath:'onModel',
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'User',
    }
},{timestamps:true});

const Like =  mongoose.model("Like",LikeSchema);

export default Like;