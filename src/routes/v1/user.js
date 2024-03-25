import express from "express";
const router = express.Router();

import {userControllers} from "../../controllers/index.js";

router.post("/signUp",userControllers.signUp);
router.post("/logIn",userControllers.logIn);        

export{
    router as userRoutes,
}