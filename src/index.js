import express from "express";
import {connect} from "./config/database.js";
import { PORT } from "./config/serverConfig.js";
import bodyParser from "body-parser";
import {APIroutes}  from "./routes/index.js";

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",APIroutes);

app.listen(PORT, async () => {
    console.log(`Server started at port no. ${PORT}`);

    await connect();
    console.log("Database Connected!!!");

});