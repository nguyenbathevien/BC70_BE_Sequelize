// models/Order.js
import { DataTypes } from 'sequelize';

import FoodModel from './food.model.js';
import sequelize from '../common/sequelize/connect.sequelize.js';
import UserModel from './user_model.js';


const OrderModel = sequelize.define('Order', {
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: UserModel,
      key: 'user_id'
    }
  },
  food_id: {
    type: DataTypes.INTEGER,
    references: {
      model: FoodModel,
      key: 'food_id'
    }
  },
  amount: {
    type: DataTypes.INTEGER
  },
  code: {
    type: DataTypes.STRING
  },
  arr_sub_id: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'order',
  timestamps: false
});

export default OrderModel;
