// These variables are used to import the necessary modules.
const router = require("express").Router();
const withAuth = require("../utils/authGuard");
const { Users, Routine, Exercise } = require("../models");

// Get the profile page.
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the user by their username.
    const user = await Users.findByPk(req.session.user_id, {
      include: [Routine],
    });
    console.log(user)
    // If the user was not found, send an error.
    if (!user) {
      res.status(404).json({ message: "No user with that username found!" });
      return;
    }
    // Serialize the user data so the template can read it.
    const userData = user.get({ plain: true });
    console.log(userData);
    // Render the profile page, passing in the user data and whether the user is logged in.
    res.render("profile", {
      Users: userData,
      Routines: userData.Routines,
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
      routineData: routineData.map(routine => routine.get({ plain: true })),
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

// Route to save a routine to profile page using routine.js and routine.handlebars then passing it into the profile.handlebars and the database
router.post("/", withAuth, async (req, res) => {
  try {
    const newRoutine = await Routine.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    const exercises = req.body.exercises.map(exercise => ({
      ...exercise,
      Routine_id: newRoutine.id,
      users_id: req.session.user_id,
    }));

    await Exercise.bulkCreate(exercises);

    res.status(200).json(newRoutine);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to get a specific routine by ID
router.get("/:id", withAuth, async (req, res) => {
  try {
    const routine = await Routine.findOne({
      where: { id: req.params.id, users_id: req.session.user_id },
      include: [Exercise],
    });

    if (!routine) {
      res.status(404).json({ message: 'No routine found with this id!' });
      return;
    }

    res.status(200).json(routine);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Export the router.
module.exports = router;
