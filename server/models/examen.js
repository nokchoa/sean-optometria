'use strict';
module.exports = (sequelize, DataTypes) => {
  const EXAMEN = sequelize.define('EXAMEN', {
    valores_examen: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});

  EXAMEN.associate = function(models) {
    // associations can be defined here
    EXAMEN.hasOne(models.CITA, {
      foreignKey: 'cod_examen',
      as: 'CITAs'
    });
  };
  return EXAMEN;
};