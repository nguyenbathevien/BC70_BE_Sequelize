import { DataTypes } from 'sequelize';
import sequelize from '../common/sequelize/connect.sequelize.js';
import RestaurantModel from './restaurant.model.js';
import UserModel from './user_model.js';
const LikeResModel = sequelize.define('LikeRes', {
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
  date_like: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'like_res',
  timestamps: false
});
LikeResModel.belongsTo(RestaurantModel,{foreignKey:'res_id', as:'restaurant'})
LikeResModel.belongsTo(UserModel,{foreignKey:'user_id', as: 'user'})
export default LikeResModel;
