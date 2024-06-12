const axios = require("axios");
const router = require("express").Router();
const withAuth = require("../utils/authGuard");
const { Routine, Exercise, Template } = require("../models");

// Get all routines
router.get("/", withAuth, async (req, res) => {
  try {
    const routineData = await Routine.findAll({
      include: [{ model: Template, include: { model: Exercise } }],
      where: { user_id: req.session.user_id },
    });

    const routines = routineData.map((routine) => routine.get({ plain: true }));

    res.status(200).json(routines);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single routine
router.get("/:id", withAuth, async (req, res) => {
  try {
    const routineData = await Routine.findByPk(req.params.id, {
      include: [{ model: Template, include: { model: Exercise } }],
    });

    if (!routineData) {
      res.status(404).json({ message: "No routine found with this id!" });
      return;
    }

    const routine = routineData.get({ plain: true });

    res.status(200).json(routine);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Example route using axios
// router.get("/some-route", async (req, res) => {
//   try {
//     const response = await axios.get("https://api.example.com/data");
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Error fetching data" });
//   }
// });

module.exports = router;
