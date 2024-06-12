const axios = require("axios");
const router = require("express").Router();
const { Users } = require("../../models");

// get all users
router.get("/", async (req, res) => {
  try {
    const userData = await Users.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = await Users.create(req.body);
    res.status(200).json(userData);
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
