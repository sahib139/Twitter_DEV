const { HashtagRepository } = require("../repository/index");

class HashtagService {

    constructor() {
        this.hashtagRepository = new HashtagRepository();
    }

    async createBulk(tags) {
        try {
            const response1 = await this.hashtagRepository.filterMany(tags);
            let preExistTags = response1.map((tag) => { return tag.title });
            tags = tags.filter((tag) => {
                return !preExistTags.includes(tag);
            });

            let response = await this.hashtagRepository.addBulk(tags);

            response = response.map((hashtag) => { return hashtag.id });
            response1.map((hashtag) => { response.push(hashtag.id) });
            
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = HashtagService;