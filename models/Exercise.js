const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Exercise extends Model {}

Exercise.init(
  {
    Exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    reps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // equipment: {
    //   type: DataTypes.STRING,
    // },
    Routine_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Routine",
        key: "id",
      },
    },
    users_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Exercise",
  }
);

module.exports = Exercise;
