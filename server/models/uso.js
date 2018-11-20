'use strict';
module.exports = (sequelize, DataTypes) => {
  const USO = sequelize.define('USO', {
    nom_uso: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  USO.associate = function(models) {
    // associations can be defined here
    USO.hasMany(models.FORMULA, {
      foreignKey: 'cod_uso',
      as: 'FORMULAs'
    });
  };
  return USO;
};