import {CommentService} from "../service/index.js";

const commentService = new CommentService();

export const comment = async (req,res)=>{
    try {
        const response = await commentService.create(req.query.model,req.query.modelId,req.body.userId,req.body.content);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Like the model",
            err:{},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to like!",
            err:error,
        });
    }
} 