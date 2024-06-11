const axios = require("axios");
const router = require("express").Router();
const { Exercise } = require("../../models");
const withAuth = require("../../utils/authGuard");

// get all exercises
router.get("/", async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll();
    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a single exercise
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

// create a new exercise
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

// // Example route using Axios to fetch data from an external API
// router.get('/example', async (req, res) => {
//   try {
//     // Make GET request to external API
//     const response = await axios.get('https://api.example.com/data');
//     // Send response data back to client
//     res.json(response.data);
//   } catch (error) {
//     // Handle error
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Error fetching data' });
//   }
// });

module.exports = router;
