'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      docent_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'pessoas', ke: 'id' }
      },
      categoria_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'categorias', ke: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cursos');
  }
};