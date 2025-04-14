"use strict";

const express = require("express");

const authController = require("../controllers/authController");

const router = express.Router();


// POST => /signup
router.post("/signup", authController.signup);

// POST => /login
router.post("/login", authController.login);



module.exports = router;
