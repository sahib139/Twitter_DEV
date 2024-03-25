import express from "express";
const router = express.Router();

import {tweetControllers} from "../../controllers/index.js";

router.post("/tweets",tweetControllers.create);
router.get("/tweets/:id",tweetControllers.fetch);

export{
    router as tweetRoutes,
}