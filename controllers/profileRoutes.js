const router = require("express").Router();
const withAuth = require("../utils/authGuard");
const { Users, Routine } = require("../models");

// Get the profile page
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the user by their username
    const user = await Users.findByPk(req.session.user_id,
    // {include: [ Routine]}
  );
  // include: [{ model: Exercise }] once we get the routines up and running
  // If the user was not found, send an error
  if (!user) {
    res.status(404).json({ message: 'No user with that username found!' });
    return;
    }
    const userData = user.get({ plain: true });
    // Render the profile page with the user's data
    res.render('profile', { 
      // userData,
      // routines: userData.Routines,
      // logged_in: req.session.logged_in
     });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
