// These variables are used to import the necessary modules.
const axios = require("axios");
const router = require("express").Router();
const { Routine, Exercise } = require("../../models");
const withAuth = require("../../utils/authGuard");

// Route to get all routines.
router.get("/", async (req, res) => {
  try {
    const routineData = await Routine.findAll();
    res.status(200).json(routineData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get a single routine.
router.get("/:id", withAuth, async (req, res) => {
  try {
    const routine = await Routine.findByPk(req.params.id,
      {include: [Exercise]}
    );
    if (!routine) {
      res.status(404).json({ message: "No routine found with this id!" });
      return;
    }
    const routineData = routine.get({ plain: true });
    res.render("routine", {
      routineData,
      exersises: routineData.Exercises,
      logged_in: req.session.logged_in,
    });
    res.status(200).json(routineData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route using axios to fetch exercise data from external API.
router.get("/routine", async (__, res) => {
  try {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises",
      params: {
      limit: "10",
      offset: "0",
      },
      headers: {
      "x-rapidapi-key": process.env.DB_API_KEY,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    console.log(response.data);

    // Send response data back to client.
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});
// Export the router.
module.exports = router;
