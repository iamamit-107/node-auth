var express = require("express");
var router = express.Router();
const userController = require("../controller/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("This is user Page");
});

router.get("/about", userController.about);

module.exports = router;
