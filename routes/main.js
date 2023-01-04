const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();

const { login, dashboard } = require("../controllers/main");
const authMiddleware = require("../middleware/auth.js");

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
