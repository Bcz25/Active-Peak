const axios = require("axios");
const router = require("express").Router();
const withAuth = require("../utils/authGuard");
const { Users, Exercise } = require("../models");

// Get the profile page
router.get("/:users_name", withAuth,async (req, res) => {
  try {
    // Find the user by their username
    const user = await Users.findOne({ where: { users_name: req.params.users_name } });
      // include: [{ model: Exercise }] once we get the routines up and running
    // If the user was not found, send an error
    if (!user) {
      res.status(404).json({ message: 'No user with that username found!' });
      return;
    }

    // Render the profile page with the user's data
    res.render('profile', { 
      user: user.get({ plain: true }),
      logged_in: req.session.logged_in
     });
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Example route using axios
// router.get("/some-route", async (req, res) => {
//   try {
//     const response = await axios.get("https://api.example.com/data");
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Error fetching data" });
//   }
// });

module.exports = router;
