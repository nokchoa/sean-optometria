'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PACIENTEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom_paciente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido1_paciente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido2_paciente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ocupacion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cod_aseguradora: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'ASEGURADORAs',
          key: 'id',
          as: 'cod_aseguradora',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PACIENTEs');
  }
};