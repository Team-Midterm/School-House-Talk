'use strict';

const supertest = require('supertest');
const { app } = require('../../src/server');
const { sequelize} = require('../../src/models/index.js');
const request = supertest(app);
// const notFound = require('../../src/ser'ver');


beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.sync();
});
// mocking routes
describe('Server Routes', () => {

  it('handles errors', async () => {
    const response = await request.get('/*');
    expect(response.status).toEqual(404);
    expect(response.error).toEqual(response.error);
    console.log('jsdfhgjkhjksdg', response.error);
    expect(response.route).toEqual(response.route);
  });
});