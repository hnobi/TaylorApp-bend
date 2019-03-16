'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,

    fullname: {
      type: DataTypes.STRING
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type:  DataTypes.ENUM(['user', 'admin']),
      defaultValue: 'user'
    },
    image: {
      type: DataTypes.STRING
    },

    phoneNumber: {
      type: DataTypes.STRING
    },

    address: {
      type: DataTypes.STRING
    },

  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};