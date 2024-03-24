const express = require("express");
const { databaseConnect } = require("./config/database");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const app = express();

const ApiRoutes = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",ApiRoutes);

app.listen(PORT, async () => {
    console.log(`Server started at port no. ${PORT}`);

    await databaseConnect();
    console.log("Database Connected!!!");

});