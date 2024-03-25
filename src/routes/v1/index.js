import express from "express";
const router = express.Router();
import {tweetRoutes} from "./tweet.js";
import {likeRoutes} from "./like.js";
import { commentRoutes } from "./comment.js";
import { userRoutes } from "./user.js";
import { Authenticate } from "../../middleware/Authentication.js";

router.use(Authenticate,tweetRoutes);
router.use(Authenticate,likeRoutes);
router.use(Authenticate,commentRoutes);
router.use(userRoutes);

export{
    router as v1ApiRoutes,
}