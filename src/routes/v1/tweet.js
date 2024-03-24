import express from "express";
const router = express.Router();

import {tweetControllers} from "../../controllers/index.js";

router.post("/tweets",tweetControllers.create);

export{
    router as tweetRoutes,
}