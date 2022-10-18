'use strict';

const logger = require('../../src/middleware/logger');

describe('Logger Testing', () => {
  let consoleSpy;
  const req = {
    method: 'GET',
    path: '/testUrl',
  };
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Returns the correct res', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith(req.method, req.path);
    expect(next).toHaveBeenCalledWith();
  });

});

