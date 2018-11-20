'use strict';
module.exports = (sequelize, DataTypes) => {
  const PACIENTE = sequelize.define('PACIENTE', {
    nom_paciente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido1_paciente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido2_paciente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ocupacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  PACIENTE.associate = function (models) {
    // associations can be defined here
    PACIENTE.belongsTo(models.ASEGURADORA, {
      foreignKey: 'cod_aseguradora',
      onDelete: 'CASCADE',
    });

    PACIENTE.hasMany(models.CITA, {
      foreignKey: 'num_documento',
      as: 'CITAs'
    });

  };
  return PACIENTE;
};