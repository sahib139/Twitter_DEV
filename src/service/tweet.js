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
            const tweet = await this.tweetRepository.create(data);

            // after this is business processing all task can be done asynchronously.
            const content = data.content;
            let tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => {
                return tag.substring(1).toLowerCase();
            });
            
            this.hashtagService.createBulk(tags,tweet.id);

            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetService;