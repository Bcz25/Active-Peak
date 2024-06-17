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

// Route to create a new routine.
router.post("/", withAuth, async (req, res) => {
  try {
    console.log("   /n   /n   /n")
    console.log(req.body)
    const { Routine_name, exercises } = req.body;

    // Create the routine in the database
    const newRoutine = await Routine.create({
      Routine_name,
    });

    // Add exercises to the routine
    await Promise.all(exercises.map(async (exercise) => {
      const newExercise = await Exercise.create({
        Exercise_name: exercise.Exercise_name,
        reps: exercise.reps,
        RoutineId: newRoutine.id, // Associate the exercise with the new routine
      });
    }));

    res.status(200).json({ message: "Routine created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create routine" });
  }
});

// // Route using axios to fetch exercise data from external API.
// router.get("/instructions", async (req, res) => {
//   try {
//     // Set the options for the axios request.
//     const exercise_name = req.query.name;
//     const options = {
//       method: "GET",
//       url: `https://exercisedb.p.rapidapi.com/exercises/name/${exercise_name}`,
//       params: { limit: "1", offset: "0" },
//       headers: {
//         accept: "application/json",
//         "x-rapidapi-key": process.env.DB_API_KEY,
//         "x-rapidapi-host": "exercisedb.p.rapidapi.com",
//       },
//     };
//     // Make the request to the external API.
//     const response = await axios.request(options);
//     res.json(response.data);
//     // Catch any errors and log them to the console.
//   } catch (error) {
//     console.error(error);
//     res.status(500).json(error);
//   }
// });
// Export the router.
module.exports = router;
