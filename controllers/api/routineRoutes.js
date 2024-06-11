const router = require("express").Router();
const { Routine } = require("../../models");
const withAuth = require("../../utils/authGuard");

// get all routines
router.get("/", async (req, res) => {
  try {
    const routineData = await Routine.findAll();
    res.status(200).json(routineData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a single routine
router.get("/:id", async (req, res) => {
  try {
    const routineData = await Routine.findByPk(req.params.id);
    if (!routineData) {
      res.status(404).json({ message: "No routine found with this id!" });
      return;
    }
    res.status(200).json(routineData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
