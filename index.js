'use strict';
const { sequelize} = require('./src/models/index');
const { start } = require('./src/server');
const {sportSeed, studentSeed} = require('./admin/seed');

sequelize.sync()
  .then(
    sportSeed(),
    studentSeed());
start();
