'use strict';
module.exports = (sequelize, DataTypes) => {
  const FORMULA = sequelize.define('FORMULA', {
    formula_lejos: DataTypes.STRING,
    formula_cerca: DataTypes.STRING
  }, {});
  FORMULA.associate = function(models) {
    // associations can be defined here
    FORMULA.belongsTo(models.TIPO, {
      foreignKey: 'cod_tipo',
      onDelete: 'CASCADE',
    });

    FORMULA.belongsTo(models.MATERIAL, {
      foreignKey: 'cod_material',
      onDelete: 'CASCADE',
    });

    FORMULA.belongsTo(models.USO, {
      foreignKey: 'cod_uso',
      onDelete: 'CASCADE',
    });

    FORMULA.hasOne(models.CITA, {
      foreignKey: 'cod_formula',
      as: 'CITAs'
    });
  };
  return FORMULA;
};