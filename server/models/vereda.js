'use strict';
module.exports = (sequelize, DataTypes) => {
  const VEREDA = sequelize.define('VEREDA', {
    nom_vereda: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  VEREDA.associate = function (models) {
    // associations can be defined here
    VEREDA.belongsTo(models.MUNICIPIO, {
      foreignKey: 'cod_municipio',
      onDelete: 'CASCADE',
    });

    VEREDA.hasMany(models.CITA, {
      foreignKey: 'cod_vereda',
      as: 'CITAs'
    });
    
  };

  return VEREDA;
};