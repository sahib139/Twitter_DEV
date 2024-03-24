import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content:{
        type:String,
        required: true,
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like",
        }
    ]
},{timestamps:true});


const Tweet = mongoose.model('Tweet' , tweetSchema);

export default Tweet;