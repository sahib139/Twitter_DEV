const express = require("express");
const { databaseConnect } = require("./config/database");
const { PORT } = require("./config/serverConfig");

const app = express();

app.listen(PORT, async () => {
    console.log(`Server started at port no. ${PORT}`);

    await databaseConnect();
    console.log("Database Connected!!!");

});