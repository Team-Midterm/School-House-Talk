'use strict';
const { sequelize, sport, student } = require('./src/models/index');
const { start } = require('./src/server');
// const { sportSeed, studentSeed } = require('./admin/seed');


sequelize.sync()
// .then(sport.create({ sport: 'Football', date: '11-01-22', time: '10:00', opponent: 'Highland Huskies', location: 'Riverside, IA' }),
// student.create({ studentID: '001', name: 'jacob', grade: 9, eligibility: true, sport: 'Baseball' }));
// sportSeed(),
// studentSeed());
start();

// 'use strict';
// const { sequelize} = require('./src/models/index');
// const { start } = require('./src/server');
// const {sportSeed, studentSeed} = require('./admin/seed');

// sequelize.sync()
//   .then(
//     sportSeed(),
//     studentSeed());
// start();
