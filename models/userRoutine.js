// These two variables are used to import the necessary modules.
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// Create the UserRoutine model.
class UserRoutine extends Model {}
// Define the UserRoutine model's columns.
UserRoutine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    custom_routine_name: {
      type: DataTypes.STRING,
    },
  },
  // These are the configuration options for the UserRoutine model.
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_routine",
  }
);
// Export the UserRoutine model.
module.exports = UserRoutine;
