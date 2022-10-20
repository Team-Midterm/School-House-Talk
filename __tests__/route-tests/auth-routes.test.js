'use strict'; 

const supertest = require('supertest');
const { app } = require('../../src/server');
const { sequelize } = require('../../src/models/index.js');
const request = supertest(app);

// Pre-load our database with fake users
beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('user authentication', () => {
  test('sends 404 if incorrect information entered', async () => {
    const response = await request.post('/signup');
    expect(response.status).toBe(404);
  });
  test('should be able to create a new user', async () => {
    let response = await request.post('/signup').send({
      username: 'test',
      password: 'pass',
      role: 'admin',

    });
    expect(response.status).toEqual(201);
  });

});
