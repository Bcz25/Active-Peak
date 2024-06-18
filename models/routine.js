// These are the imported modules.
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// This is the Routine class that extends the Model class.
class Routine extends Model {}
// This is the Routine model that is used to create the Routine table.
Routine.init(
  {
    // Define columns here.
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Routine_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  // These are the configuration options for the Routine model.
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Routine",
  }
);
// Export the Routine model.
module.exports = Routine;
