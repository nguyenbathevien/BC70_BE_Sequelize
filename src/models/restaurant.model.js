import { DataTypes } from 'sequelize';
import sequelize from '../common/sequelize/connect.sequelize.js';


const RestaurantModel = sequelize.define('Restaurant', {
  res_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  res_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  },
  desc: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'restaurant',
  timestamps: false
});

export default RestaurantModel;