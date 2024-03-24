const { HashtagRepository } = require("../repository/index");

class HashtagService {

    constructor() {
        this.hashtagRepository = new HashtagRepository();
    }

    async createBulk(tags,tweetId) {
        try {
            let preExistTags = await this.hashtagRepository.filterMany(tags);
            console.log(tags,tweetId);
            preExistTags.map((tag)=>{
                tag.tweets.push(tweetId);
                tag.save();
            });

            preExistTags = preExistTags.map((tag) => { return tag.title });
            let new_tags = tags.filter((tag) => {
                return !preExistTags.includes(tag);
            });
            new_tags = new_tags.map((tag)=>{
                return {title:tag,tweets:[tweetId]};
            })
            console.log(new_tags);

            let response = await this.hashtagRepository.addBulk(new_tags);
            
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = HashtagService;