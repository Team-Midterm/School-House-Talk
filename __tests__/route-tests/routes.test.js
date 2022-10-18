'use strict';

const supertest = require('supertest');
const { app } = require('../../src/server');
const { sqlDatabase } = require('../../src/models/index.js');
const request = supertest(app);


beforeAll(async () => {
  await sqlDatabase.sync();
});

afterAll(async () => {
  await sqlDatabase.sync();
});

describe('Server Routes', () => {

  test('handles invalid route', async () => {
    const response = await request.get('/invalidRoute');
    expect(response.status).toBe(404);
    console.log(response);
  });

});




