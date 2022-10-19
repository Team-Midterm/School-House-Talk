'use strict';
const { sequelize } = require('./src/models');
const { start } = require('./src/server');

async function serverStart() {
  try {
    await sequelize.sync();
    console.log('Database connected.');
    start();
  } catch (e) {
    console.error('Error in serverStart:', e.message);
    throw new Error(e);
  }
}

serverStart();
