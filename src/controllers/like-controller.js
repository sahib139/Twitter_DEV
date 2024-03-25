import { LikeService } from "../service/index.js";

const likeService = new LikeService();

export const toggleLike = async (req,res)=>{
    try {
        const response = await likeService.toggleLike(req.query.model,req.query.modelId,req.body.userId);
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