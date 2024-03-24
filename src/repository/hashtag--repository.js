import { Hashtag } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository{

    constructor(){
        super(Hashtag);
    }

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

export default HashtagRepository;