// models/RateRes.js
import { DataTypes } from 'sequelize';
import sequelize from '../common/sequelize/connect.sequelize.js';
import RestaurantModel from './restaurant.model.js';
import UserModel from './user_model.js';


const RateResModel = sequelize.define('RateRes', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    references: {
      model: UserModel,
      key: 'user_id'
    }
  },
  res_id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    references: {
      model: RestaurantModel,
      key: 'res_id'
    }
  },
  amount: {
    type: DataTypes.INTEGER
  },
  date_rate: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'rate_res',
  timestamps: false
});

RateResModel.belongsTo(RestaurantModel,{foreignKey:'res_id', as:'restaurant'})
RateResModel.belongsTo(UserModel,{foreignKey:'user_id', as: 'user'})

export default RateResModel;
