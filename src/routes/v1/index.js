import express from "express";
const router = express.Router();
import {tweetRoutes} from "./tweet.js";
import {likeRoutes} from "./like.js";
import { commentRoutes } from "./comment.js";
import { userRoutes } from "./user.js";

router.use(tweetRoutes);
router.use(likeRoutes);
router.use(commentRoutes);
router.use(userRoutes);

export{
    router as v1ApiRoutes,
}