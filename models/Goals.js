const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goals extends Model {}

Tag.init(
  {
  
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Goals_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    
  },
  {
    sequelize,
    timestamps: false, 
    freezeTableName: true,
    underscored: true,
    modelName: 'Goals',
  }
);

module.exports = Goals;