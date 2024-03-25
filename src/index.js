import express from "express";
import {connect} from "./config/database.js";
import { PORT } from "./config/serverConfig.js";
import bodyParser from "body-parser";
import {APIroutes}  from "./routes/index.js";
import passport from "passport";
import {passportAuth} from "./config/passportAuthConfig.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport);

app.use("/api",APIroutes);

app.listen(PORT, async () => {
    console.log(`Server started at port no. ${PORT}`);
    await connect();
    console.log("Database Connected!!!");

});