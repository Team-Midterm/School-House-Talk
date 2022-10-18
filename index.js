'use strict';
const {sequelize, student} = require ('./src/models/index');
const {start} = require('./src/server');

// start();

sequelize.sync()
  .then(() => {
    student.create({studentID: '001'});
    start();
  });


// async function seedDatabase() {

//   await student.create({
//     studentID: '001',
//     // name: chance.name(),
//     // grade: 9,
//     // eligibility: true,
//     // sport: 'Baseball',
//   });
// }

// seedDatabase();
