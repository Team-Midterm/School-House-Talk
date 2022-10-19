'use strict'; 

const base64 = require('base-64');
const middleware = require('../../src/auth/basic');
const { sequelize, users } = require('../../src/models');
const bearer = require('../../src/auth/bearer');
const jwt = require('jsonwebtoken');


// user test
let testUser = {
  admin: {username: 'test-admin', password: 'pass'},
};

// Pre-load our database with fake users
beforeAll(async () => {
  await sequelize.sync();
  await users.create(testUser.admin);
});
afterAll(async () => {
  await sequelize.drop();
});

// Mock the express req/res/next that we need for each middleware call
const req = {};
const res = {
  status: jest.fn(() => res),
  send: jest.fn(() => res),
};
const next = jest.fn();

describe('user authentication', () => {

  it('fails a login for a user (admin) with the incorrect basic credentials', () => {
    const basicAuthString = base64.encode('username:password');

    // Change the request to match this test case
    req.headers = {
      authorization: `Basic ${basicAuthString}`,
    };

    return middleware(req, res, next)
      .then(() => {
        expect(next).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(403);
      });

  });

  it('logs in an admin user with the right credentials', () => {
    let basicAuthString = base64.encode(`${testUser.admin.username}:${testUser.admin.password}`);

    // Change the request to match this test case
    req.headers = {
      authorization: `Basic ${basicAuthString}`,
    };

    return middleware(req, res, next)
      .then(() => {
        expect(next).toHaveBeenCalledWith();
      });

  });
});


describe('user authentication', () => {
  const req = {};
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(() => res),
    json: jest.fn(() => res),
  };
  const next = jest.fn();


  it('logs in a user with a proper token', () => {

    const user = { username: 'admin' };
    const token = jwt.sign(user, process.env.SECRET);
    req.headers = {
      authorization: `Bearer ${token}`,
    };

    return bearer(req, res, next)
      .then(() => {
        expect(next).toHaveBeenCalledWith('Login Invalid');
      });
  });
});
