// models/Type.js
import { DataTypes } from 'sequelize';
import sequelize from '../common/sequelize/connect.sequelize.js';


const TypeModel = sequelize.define('Type', {
  type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'type',
  timestamps: false
});

export default TypeModel;
