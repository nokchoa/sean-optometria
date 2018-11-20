'use strict';
module.exports = (sequelize, DataTypes) => {
  const MUNICIPIO = sequelize.define('MUNICIPIO', {
    nom_minucipio: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  MUNICIPIO.associate = function (models) {
    // associations can be defined here
    MUNICIPIO.belongsTo(model.DEPARTAMENTO, {
      foreignKey: 'cod_departamento',
      onDelete: 'CASCADE',
    });
    MUNICIPIO.hasMany(models.VEREDA, {
      foreignKey: 'cod_municipio',
      as: 'VEREDAs',
    });
  };

  return MUNICIPIO;
};