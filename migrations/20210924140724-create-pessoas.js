'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_pessoas', {

      id:
      {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome:
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf:
      {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      idade:
      {
        type: Sequelize.STRING(3),
        allowNull: false,
      },
      sexo:
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
      local:
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
      data:
      {
        type: Sequelize.DATE,
        allowNull: true,
      },
      horario:
      {
        type: Sequelize.TIME,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_pessoas');
  }
};
