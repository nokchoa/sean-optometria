'use strict';
module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Animal.associate = function (models) {
    // associations can be defined here
    Animal.belongsTo(models.Specie, {
      foreignKey: 'specieId',
      onDelete: 'CASCADE',
    });
  };
  return Animal;
};