// These variables are used to import the necessary modules.
const router = require("express").Router();
const axios = require("axios");

// Get route using axios to fetch exercise data from external API and display it in a modal.
router.get("/instructions", async (req, res) => {
  try {
    // Get the exercise name from the query string.
    const exercise_name = req.query.name;
    // Set the options for the axios request.
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
    // Make the axios request.
    console.log('\n \n')
    const response = await axios.request(options);
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Export the router.
module.exports = router;
