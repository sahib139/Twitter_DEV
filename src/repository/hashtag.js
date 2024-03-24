const { Hashtag } = require("../models/index");

class HashtagRepository {

    async filterMany(tags) {
        try {
            const Tags = await Hashtag.find({
                title: tags,
            });
            return Tags;
        } catch (error) {
            console.log(error);
        }
    }

    async addBulk(tags) {
        try {
            const hashtags = await Hashtag.insertMany(tags);
            return hashtags;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;