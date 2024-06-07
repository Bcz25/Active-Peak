const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WorkoutTemplate extends Model {}

WorkoutTemplate.init(
  {
    
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // Name of the Product model
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // Name of the Tag model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'WorkoutTemplate',
  }
);

module.exports = WorkoutTemplate;