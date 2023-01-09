const router = require("express").Router();
const mailControllers = require("../controllers/mailController");

router.get("/", mailControllers.send);

module.exports = router;
