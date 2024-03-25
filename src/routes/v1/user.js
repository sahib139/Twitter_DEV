import express from "express";
const router = express.Router();

import {userControllers} from "../../controllers/index.js";

router.post("/users",userControllers.create);

export{
    router as userRoutes,
}