import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content:{
        type:String,
        required: true,
    },
},{timestamps:true});


const Tweet = new mongoose.model('Tweet' , tweetSchema);

export default Tweet;