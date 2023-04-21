'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Excluded extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Excluded.init({
    id: DataTypes.INTEGER,
    user_id: DataTypes.TEXT,
    activity_id: DataTypes.INTEGER,
    meal_id: DataTypes.INTEGER,
    dessert_id: DataTypes.INTEGER,
    date_created: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Excluded',
  });
  return Excluded;
};