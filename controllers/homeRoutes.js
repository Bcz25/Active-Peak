// These variables are used to import the necessary modules.
const router = require("express").Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

// Gets the log in page
router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    res.status(500).json(err);
  }
});

// get signup page 
router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
