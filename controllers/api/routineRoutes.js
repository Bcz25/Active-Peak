// These variables are used to import the necessary modules.
const axios = require("axios");
const router = require("express").Router();
const { Routine, Exercise } = require("../../models");
const withAuth = require("../../utils/authGuard");

// Route to get a single routine.
router.get("/:id", withAuth, async (req, res) => {
  try {
    const routine = await Routine.findByPk(req.params.id, {
      include: [Exercise],
    });
    if (!routine) {
      res.status(404).json({ message: "No routine found with this id!" });
      return;
    }
    const routineData = routine.get({ plain: true });
    res.render("routine", {
      Routine: routineData,
      exercises: routineData.Exercises,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route using axios to fetch exercise data from external API.
router.get("/routine", async (req, res) => {
  try {
    // Set the options for the axios request.
    const options = {
      method: "GET",
      url: "https://v2.exercisedb.io/exercises",
      params: { limit: "10", offset: "0" },
      headers: { accept: "application/json" },
    };
    // Make the request to the external API.
    const response = await axios.request(options);
    res.json(response.data);
    // Catch any errors and log them to the console.
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});
// Export the router.
module.exports = router;
