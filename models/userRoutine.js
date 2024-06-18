const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserRoutine extends Model {}

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
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_routine",
  }
);

module.exports = UserRoutine;
