import {TweetService} from "../service/index.js";

const tweetService = new TweetService();

export const create = async (req,res)=>{
    try {
        const tweet = await tweetService.create(req.body);
        return res.status(200).json({
            data:tweet,
            message:"tweet successfully created!",
            success:true,
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            message:"tweet successfully created!",
            success:true,
            err:error,
        });
    }
}
