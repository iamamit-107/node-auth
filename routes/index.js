var express = require("express");
var router = express.Router();
const appController = require("../controller/appController");

/* GET home page. */
router.get("/", appController.root);

router.post("/about", appController.about);

module.exports = router;
