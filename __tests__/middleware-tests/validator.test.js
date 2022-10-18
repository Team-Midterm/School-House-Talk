'use strict';


const validator = require('../../src/middleware/validator');
const res = {};
const next = jest.fn();

describe('Validator Testing', () => {
  test('works as expected', () => {
    const req = {
      query: {
        name: 'hello',
      },
    };
    validator(req, res, next);
    expect(req.query.name).toBeTruthy();
    expect(req.query.name).toBe('hello');
    expect(next).toHaveBeenCalledWith();
  });
  test('fails as expected', () => {
    const req = {
      query: {
        name: '',
      },
    };
    validator(req, res, next);
    expect(req.query.name).toBeFalsy();
    expect(next).toHaveBeenCalledWith();
  });
});



