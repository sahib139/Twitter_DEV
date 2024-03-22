const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
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
    ],
},{timestamps:true});

tweetSchema.virtual('userName').get(function process(){
    const username = this.userEmail.split("@")[0];
    return username;
});

tweetSchema.virtual("email").set(function process(email){
    this.userEmail = email;
    return ;
});

const Tweet = new mongoose.model('Tweet' , tweetSchema);

module.exports=Tweet;