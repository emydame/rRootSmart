/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
