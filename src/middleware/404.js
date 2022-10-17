'use strict';

module.exports = function (err, req, res, next) {
  const error = err.message ? err.message : err;

  const errObject = {
    status: 404,
    message: error,
  };

  res.staus(404).json(errObject);
};

