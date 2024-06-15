// These are the imported modules.
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// This is the Exercise class that extends the Model class.
class Exercise extends Model {}
// This is the Exercise model that is used to create the Exercise table.
Exercise.init(
  {
    Exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    reps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // This is the foreign key that links the Exercise table with the Routine table.
    Routine_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Routine",
        key: "id",
      },
    },
    // This is the foreign key that links the Exercise table with the Users table.
    users_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  // These are the configuration options for the Exercise model.
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Exercise",
  }
);
// Export the Exercise model.
module.exports = Exercise;
