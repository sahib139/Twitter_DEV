const Comment = require("../models/comments");

class CommentRepository{

    async create(data){
        try {
            const comment = await Comment.create(data);
            return comment;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            await Comment.findByIdAndRemove(id);
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const comment = await Comment.findById(id);
            return comment;
        } catch (error) {
            console.log(error);            
        }
    }

}

module.exports = CommentRepository;