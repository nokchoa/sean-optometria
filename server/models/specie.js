'use strict';
module.exports = (sequelize, DataTypes) => {
  const Specie = sequelize.define('Specie', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Specie.associate = function (models) {
    // associations can be defined here
    Specie.hasMany(models.Animal, {
      foreignKey: 'specieId',
      as: 'species'
    });
    Specie.belongsTo(models.Class, {
      foreignKey: 'classId',
      onDelete: 'CASCADE',
    })
  };
  return Specie;
};