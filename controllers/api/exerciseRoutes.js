// These variables are used to import the necessary modules.
const router = require("express").Router();
const { Exercise } = require("../../models");
const withAuth = require("../../utils/authGuard");
const axios = require("axios");

// Route to get all exercises.
router.get("/", async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll();
    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get route using axios to fetch exercise data from external API and display it in a modal.
router.get("/instructions", async (req, res) => {
  try {
    const exercise_name = req.query.name;
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/name/${exercise_name}`,
      params: { limit: "1", offset: "0" },
      headers: {
        accept: "application/json",
        "x-rapidapi-key": process.env.DB_API_KEY,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };
    console.log('\n \n')
    const response = await axios.request(options);
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});


// Route to get a single exercise.
router.get("/:id", async (req, res) => {
  try {
    const exerciseData = await Exercise.findByPk(req.params.id);
    if (!exerciseData) {
      res.status(404).json({ message: "No exercise found with this id!" });
      return;
    }
    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to create a new exercise.
router.post("/", withAuth, async (req, res) => {
  try {
    const newExercise = await Exercise.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});
// Export the router.
module.exports = router;
