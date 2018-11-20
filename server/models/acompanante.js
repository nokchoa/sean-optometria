'use strict';
module.exports = (sequelize, DataTypes) => {
  const ACOMPANANTE = sequelize.define('ACOMPANANTE', {
    nom_acompanante: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parentesco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  ACOMPANANTE.associate = function (models) {
    // associations can be defined here
    ACOMPANANTE.hasMany(models.CITA, {
      foreignKey: 'cod_acompanante',
      as: 'CITAs'
    });
    
  };
  return ACOMPANANTE;
};