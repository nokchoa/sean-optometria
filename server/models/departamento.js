'use strict';
module.exports = (sequelize, DataTypes) => {
  const DEPARTAMENTO = sequelize.define('DEPARTAMENTO', {
    nom_departamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  DEPARTAMENTO.associate = function(models) {
    // associations can be defined here
    DEPARTAMENTO.hasMany(models.MUNICIPIO, {
      foreignKey: 'cod_departamento',
      as: 'MUNICIPIOs',
    });
  };

  return DEPARTAMENTO;
};