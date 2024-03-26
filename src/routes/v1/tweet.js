import express from "express";
import {uploadImages} from "../../middleware/upload_image_tweet.js";
const router = express.Router();

import {tweetControllers} from "../../controllers/index.js";

router.post("/tweets",uploadImages,tweetControllers.create);
router.get("/tweets/:id",tweetControllers.fetch);

export{
    router as tweetRoutes,
}