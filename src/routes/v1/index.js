import express from "express";
const router = express.Router();
import {tweetRoutes} from "./tweet.js";

router.use(tweetRoutes);

export{
    router as v1ApiRoutes,
}