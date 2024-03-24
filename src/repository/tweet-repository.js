import { Tweet } from "../models/index.js";

class TweetRepository{

    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            await Tweet.findByIdAndRemove(id);
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getInDetail(id){
        try {
            const tweet = await Tweet.findById(id).populate({
                path:"comments",
                populate: { path: "comments" },
            });
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }   

    async getAll(limit,offset){
        try {
            const tweets = await Tweet.find().skip(offset).limit(limit);
            return tweets;
        } catch (error) {
            console.log(error);
        }
    }


}

export default TweetRepository;