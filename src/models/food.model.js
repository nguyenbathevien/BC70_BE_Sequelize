// models/Food.js
import { DataTypes } from 'sequelize';
import sequelize from '../common/sequelize/connect.sequelize.js';
import TypeModel from './type.model.js';


const FoodModel = sequelize.define('Food', {
  food_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  food_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT
  },
  desc: {
    type: DataTypes.STRING
  },
  type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: TypeModel,
      key: 'type_id'
    }
  }
}, {
  tableName: 'food',
  timestamps: false
});

export default FoodModel;
