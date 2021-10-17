'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    about: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    pc: DataTypes.JSON,
    photoUrl: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};