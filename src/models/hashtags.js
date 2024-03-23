const mongoose = require("mongoose");

const HashtagSchema = mongoose.Schema({
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

module.exports=Hashtag;