'use strict';
module.exports = (sequelize, DataTypes) => {
  const ASEGURADORA = sequelize.define('ASEGURADORA', {
    nom_aseguradora: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  ASEGURADORA.associate = function(models) {
    // associations can be defined here
    ASEGURADORA.hasMany(models.PACIENTE,{
      foreignKey: 'cod_aseguradora',
      as: 'PACIENTEs'
    });
  };
  return ASEGURADORA;
};