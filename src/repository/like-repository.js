import {Like} from "../models/index.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{
    
    constructor(){
        super(Like);
    }   
    
    async findLike(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log("Something went wrong at like repository layer!");
            throw error;
        }
    }

}

export default LikeRepository;