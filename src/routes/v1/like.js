import express from "express";
const router = express.Router();

import {likeControllers} from "../../controllers/index.js";

router.post("/likes/toggle",likeControllers.toggleLike);

export{
    router as likeRoutes,
}