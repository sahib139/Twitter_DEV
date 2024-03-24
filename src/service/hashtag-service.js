import { HashtagRepository } from "../repository/index.js";

class HashtagService {

    constructor() {
        this.hashtagRepository = new HashtagRepository();
    }

    async createBulk(tags,tweetId) {
        try {
            let preExistTags = await this.hashtagRepository.filterMany(tags);
            preExistTags.map(async (tag)=>{
                tag.tweets.push(tweetId);
                await tag.save();
            });

            preExistTags = preExistTags.map((tag) => { return tag.title });
            let new_tags = tags.filter((tag) => {
                return !preExistTags.includes(tag);
            });
            new_tags = new_tags.map((tag)=>{
                return {title:tag,tweets:[tweetId]};
            })

            let response = await this.hashtagRepository.addBulk(new_tags);
            
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

export default HashtagService;