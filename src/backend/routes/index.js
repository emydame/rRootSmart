/* eslint-disable new-cap */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
<<<<<<< HEAD
=======
/* eslint-disable no-unused-vars */
>>>>>>> 550b4a9cdf5880110e445975b11b74b5efba63ac
/* eslint new-cap: "error" */
const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "connected"
  });
});

module.exports = router;
