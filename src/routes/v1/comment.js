import express from "express";
const router = express.Router();

import {commentControllers} from "../../controllers/index.js";

router.post("/comments",commentControllers.comment);

export{
    router as commentRoutes,
}