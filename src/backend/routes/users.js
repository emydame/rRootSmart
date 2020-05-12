<<<<<<< HEAD
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
=======
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint new-cap: "error" */
>>>>>>> 550b4a9cdf5880110e445975b11b74b5efba63ac
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
