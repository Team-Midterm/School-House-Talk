'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('sport', {
    sport: {
      type: DataTypes.ENUM,
      values: ['Football', 'Baseball', 'Basketball', 'Soccer'],
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    opponent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
