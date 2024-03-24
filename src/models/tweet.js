const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
    content:{
        type:String,
        required: true,
    },
},{timestamps:true});


const Tweet = new mongoose.model('Tweet' , tweetSchema);

module.exports=Tweet;