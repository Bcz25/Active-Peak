const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Routine extends Model {}

Routine.init(
  {
    // Define columns here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Routine_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    muscle_group: {
      type: DataTypes.STRING,
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Routine",
  }
);

module.exports = Routine;
