'use strict';

module.exports = (sequelizeDB, DataTypes) => {
  return sequelizeDB.define('sport', {
    sport: {
      type: DataTypes.ENUM,
      values: ['Football', 'Baseball', 'Basketball', 'Soccer'],
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
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


