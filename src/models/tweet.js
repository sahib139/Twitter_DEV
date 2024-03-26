import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content:{
        type:String,
        required: true,
    },
    images:[
        {
            type:String,
        }
    ],
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like",
        }
    ],
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
        }
    ]
},{timestamps:true});


const Tweet = mongoose.model('Tweet' , tweetSchema);

export default Tweet;