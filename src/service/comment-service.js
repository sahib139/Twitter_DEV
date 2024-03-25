import {CommentRepository, TweetRepository} from "../repository/index.js";

class CommentService{
    constructor(){
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(model,modelId,userId,Content){
        if(model === 'Tweet'){
            var commentable = await this.tweetRepository.get(modelId);
        }else if(model === 'Comment'){
            commentable = await this.commentRepository.get(modelId);
        }else{
            console.log("No such model found!!");
            throw new Error("no model match!");
        }

        const new_comment = await this.commentRepository.create({
            content:Content,
            onModel:model,
            commentable:modelId,
            user:userId,
            comments:[],
        });
        commentable.comments.push(new_comment);
        await commentable.save();

        return new_comment;
    }
}

export default CommentService;