const {sequelize} = require ('../src/models/index');
const {student, sport} = require('../src/models');
const Chance = require('chance');

let chance = new Chance();

async function seedDatabase() {
  sequelize.sync();


  await student.create({
    studentID: '001',
    // name: chance.name(),
    // grade: 9,
    // eligibility: true,
    // sport: 'Baseball',
  });
}

seedDatabase();
