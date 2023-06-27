'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postphoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  postphoto.init({
    photo: DataTypes.TEXT,
    authorid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'postphoto',
  });
  return postphoto;
};