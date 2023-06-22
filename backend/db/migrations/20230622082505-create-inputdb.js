'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Inputdbs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      body: {
        type: Sequelize.TEXT,
      },
      name: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      authorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Students",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Inputdbs');
  }
};