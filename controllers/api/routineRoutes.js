const axios = require("axios");
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

// route using Axios to fetch data from an external API
router.get('/routine', async (req, res) => {
  try {
    // Make GET request to external API
    const response = await axios.get('https://api.example.com/data');
    // Send response data back to client
    res.json(response.data);
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

module.exports = router;
