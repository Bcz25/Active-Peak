// These variables are used to import the necessary modules.
const router = require("express").Router();
const { Exercise } = require("../../models");
const withAuth = require("../../utils/authGuard");

// Route to get all exercises.
router.get("/", async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll();
    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
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
