import mongoose from "mongoose";

const HashtagSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        max:[250,'Tweet cannot have than 250 character'],
        index:true,
    },
    tweets:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Tweet",
        }
    ],
},{timestamps:true});

const Hashtag = mongoose.model("Hashtag",HashtagSchema);

export default Hashtag;