const { TweetRepository, HashtagRepository } = require("../repository/index");
const HashtagService = require("./hashtag");

class TweetService {

    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
        this.hashtagService = new HashtagService();
    }

    async create(data) {
        try {
            // (/#[a-zA-Z0-9_]+/g) --> regex for hashtag 
            const content = data.content;
            let tags = content.match(/#[a-zA-Z0-9_]+/g);
            tags = tags.map((tag) => {
                return tag.substring(1);
            });
            tags = await this.hashtagService.createBulk(tags);

            const tweet = await this.tweetRepository.create(data);
            tags.map((tag) => {
                tweet.hashtags.push(tag);
            });
            await tweet.save();
            
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetService;