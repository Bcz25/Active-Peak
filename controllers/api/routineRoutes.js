// These variables are used to import the necessary modules.
const router = require("express").Router();
const { Routine, Exercise, UserRoutine } = require("../../models");
const withAuth = require("../../utils/authGuard");

// Route to get a single routine.
router.get("/:id", withAuth, async (req, res) => {
  try {
    // Find the routine by its id.
    const routine = await Routine.findByPk(req.params.id, {
      // Include the exercises associated with the routine.
      include: [Exercise],
    });
    // If the routine was not found, send an error.
    if (!routine) {
      res.status(404).json({ message: "No routine found with this id!" });
      return;
    }
    // Serialize the routine data so the template can read it.
    const routineData = routine.get({ plain: true });
    // Render the routine page, passing in the routine data and whether the user is logged in.
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
    console.log(req.body);
    const { Routine_name, exercises } = req.body;
    const user_id = req.session.user_id;
    // Create the routine in the database.
    const newRoutine = await Routine.create({
      Routine_name,
      users_id: user_id,
    });
    // Add exercises to the routine.
    await Promise.all(
      exercises.map(async (exercise) => {
        const newExercise = await Exercise.create({
          Exercise_name: exercise.Exercise_name,
          reps: exercise.reps,
          RoutineId: newRoutine.id, // Associate the exercise with the new routine.
        });
      })
    );
    // Send a success message if the routine was created.
    res.status(200).json({ message: "Routine created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create routine" });
  }
});

// Route to save a routine to the user's profile.
router.post("/saveRoutine", withAuth, async (req, res) => {
  try {
    // Get the user id from the session and the routine id from the request body.
    const UserId = req.session.user_id;
    const RoutineId = parseInt(req.body.routine_id);
    console.log(UserId);
    console.log(RoutineId);
    // Create a new association between the user and the routine.
    const newAssociation = await UserRoutine.create({
      UserId,
      RoutineId,
      custom_routine_name: req.body.custom_routine_name,
    });
    // Send the new association data back to the client.
    console.log(newAssociation);
    res.status(200).json(newAssociation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save routine" });
  }
});

// Export the router.
module.exports = router;
