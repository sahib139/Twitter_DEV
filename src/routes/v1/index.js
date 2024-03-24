const express = require("express");
const router = express.Router();
const tweetRoutes = require("./tweet");

router.use(tweetRoutes);

module.exports = router;