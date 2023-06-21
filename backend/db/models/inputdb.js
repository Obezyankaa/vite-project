'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inputdb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Student }) {
      // define association here
      this.belongsTo(Student, { foreignKey: "authorId" });
    }
  }
  Inputdb.init({
    body: DataTypes.TEXT,
    name: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Inputdb',
  });
  return Inputdb;
};