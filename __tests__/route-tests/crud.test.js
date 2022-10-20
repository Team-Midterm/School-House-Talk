'use strict';

const supertest = require('supertest');
const { app } = require('../../src/server');
const mockRequest = supertest(app);
const { sequelize, student, sport } = require('../../src/models/index');
const ModelInterface = require('../../src/models/model-interface');



const newUser1 = {
  username: 'testUser',
  password: 'pass',
  role: 'admin',
};

const sportExample1 = {
  ID: 1,
  sport: 'Football',
  date: '01/01/2022',
  time: 'test time',
  opponent: 'test opponent',
  location: 'test location',
};

const studentExample1 = {
  ID: 1,
  studentID: '001',
  studentName: 'Test Student Name',
  grade: 10,
  eligibility: true,
  studentSport: 'Football',
};


beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
  await sequelize.close();
});
// mocking test
describe('CRUD Tests', () => {
  test('Read failures', () => {
    console.log('-----SPORT READ-----', sport.read());
    console.log('-----STUDENT READ-----', student.read());
    // expect(sport.read()).toBe;
  });
  test('Create Student', () => {
    student.create(studentExample1);

  });
  test('Create Sport', () => {
    sport.create(sportExample1);
  });
  test('Delete Sport', () =>{
    sport.delete(sportExample1.ID);
  });
  test('Delete Student', () =>{
    student.delete(studentExample1.ID);
  });
  
  
});







