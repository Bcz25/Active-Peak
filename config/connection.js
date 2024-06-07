// Imports the Sequelize constructor from the library
const Sequelize = require('sequelize');
// Utilizes the dotenv package to set environment variables
require('dotenv').config();
let sequelize;
// Line 7-19: If the app is deployed, it will use the deployed database. Otherwise, it will use the local database.
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    // process.env.DB_EDB,
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );
}
module.exports = sequelize;