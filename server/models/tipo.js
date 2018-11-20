'use strict';
module.exports = (sequelize, DataTypes) => {
  const TIPO = sequelize.define('TIPO', {
    nom_tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  TIPO.associate = function (models) {
    // associations can be defined here
    TIPO.hasMany(models.FORMULA, {
      foreignKey: 'cod_tipo',
      as: 'FORMULAs'
    });
  };
  return TIPO;
};