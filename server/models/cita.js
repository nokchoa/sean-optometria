'use strict';
module.exports = (sequelize, DataTypes) => {
  const CITA = sequelize.define('CITA', {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  CITA.associate = function (models) {
    // associations can be defined here
    CITA.belongsTo(models.VEREDA, {
      foreignKey: 'cod_vereda',
      onDelete: 'CASCADE'
    });

    CITA.belongsTo(models.FORMULA, {
      foreignKey: 'cod_formula',
      onDelete: 'CASCADE'
    });

    CITA.belongsTo(models.EXAMEN, {
      foreignKey: 'cod_examen',
      onDelete: 'CASCADE'
    });

    CITA.belongsTo(models.ACOMPANANTE, {
      foreignKey: 'cod_acompanante',
      onDelete: 'CASCADE'
    });

    CITA.belongsTo(models.PACIENTE, {
      foreignKey: 'num_documento',
      onDelete: 'CASCADE'
    });

  };

  return CITA;
};