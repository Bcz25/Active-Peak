// Import the sequelize connection, the User model, and the Post model, and the data from the JSON files.
const sequelize = require('../config/connection');
const { Users, Post } = require('../models');
const userData = require('./userData.json');
const postData = require('./postData.json');
// Define the function that will seed the database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
// Use the bulkCreate method to insert the data into the database
  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
// Exit the process when the data is inserted
  process.exit(0);
};
// Call the function to seed the database
seedDatabase();