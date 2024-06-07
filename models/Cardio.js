const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Cardio extends Model {}

Cardio.init(
  {
    // Define columns here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cardio_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
   
  },
  {
    sequelize,
    timestamps: false, 
    freezeTableName: true,
    underscored: true,
    modelName: 'cardio',
  }
);

module.exports = Cardio;