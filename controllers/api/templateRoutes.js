const axios = require("axios");
const router = require("express").Router();
const { Template } = require("../../models");
const withAuth = require("../../utils/authGuard");

// Get all templates
router.get("/", async (req, res) => {
  try {
    const templateData = await Template.findAll();

    res.status(200).json(templateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single template
router.get("/:id", async (req, res) => {
  try {
    const templateData = await Template.findByPk(req.params.id);

    if (!templateData) {
      res.status(404).json({ message: "No template found with this id!" });
      return;
    }

    res.status(200).json(templateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new template
router.post("/", withAuth, async (req, res) => {
  try {
    const newTemplate = await Template.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTemplate);
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
