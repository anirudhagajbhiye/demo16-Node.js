var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("I am product list.");
});

router.get("/*", function (req, res) {
  res.send("Invalid url");
});

//export this router to use in our index.js
module.exports = router;
