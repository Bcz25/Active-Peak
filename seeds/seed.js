// Import the sequelize connection, the User model, and the Post model, and the data from the JSON files.
const sequelize = require("../config/connection");
const { Exercise } = require("../models");
const { Routine } = require("../models");
const exerciseData = require("./excersiseData.json");
const routineData = require("./routineData.json");

// Define the function that will seed the database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  // Use the bulkCreate method to insert the data into the database
  await Routine.bulkCreate(routineData, {
    individualHooks: true,
    returning: true,
  });
  // Use the bulkCreate method to insert the data into the database
  await Exercise.bulkCreate(exerciseData, {
    individualHooks: true,
    returning: true,
  });
  // Exit the process when the data is inserted
  process.exit(0);
};
// Call the function to seed the database
seedDatabase();
