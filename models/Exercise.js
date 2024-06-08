const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Exercise extends Model {}

Exercise.init(
  {
  
    Exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
    
  
  {
    sequelize,
    timestamps: true, 
    freezeTableName: true,
    underscored: true,
    modelName: 'Exercise',
  }
);

module.exports = Exercise;