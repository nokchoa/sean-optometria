'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FORMULAs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      formula_lejos: {
        type: Sequelize.STRING
      },

      formula_cerca: {
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

      cod_tipo: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'TIPOs',
          key: 'id',
          as: 'cod_tipo'
        },
      },

      cod_material: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'MATERIALs',
          key: 'id',
          as: 'cod_material'
        },
      },

      cod_uso: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'USOs',
          key: 'id',
          as: 'cod_uso'
        },
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FORMULAs');
  }
};