const express = require("express");
const router = express.Router();

const {tweetControllers} = require("../../controllers/index");

router.post("/tweets",tweetControllers.create);

module.exports = router;