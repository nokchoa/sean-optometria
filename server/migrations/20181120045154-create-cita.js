'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CITA', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      fecha: {
        type: Sequelize.DATE,
        allowNull: false
      },

      motivo: {
        type: Sequelize.STRING,
        allowNull: false
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      num_documento: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'PACIENTEs',
          key: 'id',
          as: 'num_documento'
        },
      },

      cod_vereda: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'VEREDAs',
          key: 'id',
          as: 'cod_vereda'
        },
      },

      cod_formula: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'FORMULAs',
          key: 'id',
          as: 'cod_formula'
        },
      },

      cod_examen: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'EXAMENs',
          key: 'id',
          as: 'cod_examen'
        },
      },

      cod_acompanante: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'ACOMPANANTEs',
          key: 'id',
          as: 'cod_acompanante'
        },
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CITA');
  }
};