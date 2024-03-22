const express = require("express");
const {databaseConnect} = require("./config/database");
const {PORT} = require("./config/serverConfig");

const app = express();

const TweetRepository = require("./repository/tweet");
const TweetRepo = new TweetRepository();

const CommentRepository = require("./repository/comment");
const CommentRepo = new CommentRepository();

app.listen(PORT,async ()=>{
    console.log(`Server started at port no. ${PORT}`);
    await databaseConnect();
    console.log("Database Connected!!!");
})