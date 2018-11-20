'use strict';
module.exports = (sequelize, DataTypes) => {
  const MATERIAL = sequelize.define('MATERIAL', {
    nom_material: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  MATERIAL.associate = function (models) {
    // associations can be defined here
    MATERIAL.hasMany(models.FORMULA, {
      foreignKey: 'cod_material',
      as: 'FORMULAs'
    });
  };
  return MATERIAL;
};