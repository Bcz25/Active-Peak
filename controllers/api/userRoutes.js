const bcrypt = require("bcrypt");
const axios = require("axios");
const router = require("express").Router();
const { Users } = require("../../models");

// get all users
router.get("/", async (req, res) => {
  try {
    const userData = await Users.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
