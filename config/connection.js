// Imports the Sequelize constructor from the library.
const Sequelize = require("sequelize");
// Utilizes the dotenv package to set environment variables.
require("dotenv").config();
let sequelize;
// If the app is deployed, it will use the deployed database. Otherwise, it will use the local database.
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    // The dialect is set to 'mysql' to define the type of database being used.
    {
      host: "localhost",
      dialect: "postgres",
      // The dialectOptions object is used to define additional options for the connection.
      dialectOptions: {
        apiKey: process.env.DB_API_KEY,
      },
    }
  );
}
// Exports the connection.
module.exports = sequelize;
