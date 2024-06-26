// These variables are used to import the necessary modules.
const router = require("express").Router();
const withAuth = require("../utils/authGuard");
const { Users, Routine, Exercise, UserRoutine } = require("../models");

// Get the profile page.
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the user by their username.
    const user = await Users.findByPk(req.session.user_id, {
      include: [UserRoutine],
    });
    // If the user was not found, send an error.
    if (!user) {
      res.status(404).json({ message: "No user with that username found!" });
      return;
    }
    // Serialize the user data so the template can read it.
    const userData = user.get({ plain: true });
    // Render the profile page, passing in the user data and whether the user is logged in.
    res.render("profile", {
      Users: userData,
      userRoutines: userData.user_routines,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get the routine page while on the profile page.
router.get("/routine", withAuth, async (req, res) => {
  try {
    const routineData = await Routine.findAll({ include: [Exercise] });
    res.render("routine", {
      routineData: routineData.map((routine) => routine.get({ plain: true })),
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error("Error fetching routines:", err);
    res.status(500).json(err);
  }
});

// Route to get all routines for the profile page
router.get("/", withAuth, async (req, res) => {
  try {
    const routines = await Routine.findAll({
      where: { users_id: req.session.user_id },
      include: [Exercise],
    });

    res.status(200).json(routines);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Export the router.
module.exports = router;
