'use strict';

const logger = (res, req, next) => {
  console.log(req.method, req.path);
  next();
};

module.exports = logger;
