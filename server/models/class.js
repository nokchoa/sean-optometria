'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Class.associate = function (models) {
    // associations can be defined here
    Class.hasMany(models.Specie, {
      foreignKey: 'classId',
      as: 'species',
    })

  };
  return Class;
};