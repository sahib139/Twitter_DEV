import { TweetRepository, LikeRepository } from "../repository/index.js";

class LikeService {

    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(model, modelId, userId) {
        try {
            if (model === 'Tweet') {
                var likeable = await this.tweetRepository.getInDetail(modelId);
            } else if (model === 'Comment') {
                //TODO
            } else {
                console.log("No model with a name " + error);
                throw new Error("Incorrect model name!!");
            }

            const likeExist = await this.likeRepository.findLike({
                onModel: model,
                likeable: modelId,
                user: userId,
            });

            if (likeExist) {
                likeable.likes.pull(likeExist.id)
                await likeable.save();
                await this.likeRepository.delete(likeExist.id);
                var isAdded = false;
            } else {
                const newLike = await this.likeRepository.create({
                    onModel: model,
                    likeable: modelId,
                    user: userId,
                });
                likeable.likes.push(newLike);
                await likeable.save();
                isAdded = true;
            }

            return true;

        } catch (error) {
            console.log("Something went wrong at Like service layer!!");
            throw error;
        }
    }
}

export default LikeService;
