'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
