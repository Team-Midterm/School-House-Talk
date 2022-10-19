'use strict';

const supertest = require('supertest');
const { app } = require('../../src/server');
const { sequelize, student, sport } = require('../../src/models/index.js');
const request = supertest(app);


beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.sync();
});

describe('Server Routes', () => {
//mocking route
  test('handles invalid route', async () => {
    const response = await request.get('/invalidRoute');
    expect(response.status).toBe(404);
    console.log('response status', response.status);
    console.log('response body', response.body);
  });
  test('handles home route', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Welcome to the School-House-Talk server');
  });



});




