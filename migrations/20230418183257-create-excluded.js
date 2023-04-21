'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('excludeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
        onDelete: 'CASCADE',
      },
      user_id: {
        type: Sequelize.TEXT,
        onDelete: 'CASCADE',
      },
      activity_id: {
        type: Sequelize.INTEGER,
        references: { model: 'activities', foreignKey: 'id' },
        onDelete: 'CASCADE',
      },
      meal_id: {
        type: Sequelize.INTEGER,
        references: { model: 'meals', foreignKey: 'id' },
        onDelete: 'CASCADE',
      },
      dessert_id: {
        type: Sequelize.INTEGER,
        references: { model: 'desserts', foreignKey: 'id' },
        onDelete: 'CASCADE',
      },
      date_created: {
        type: Sequelize.DATE,
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        onDelete: 'CASCADE',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        onDelete: 'CASCADE',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('excludeds');
  },
};
