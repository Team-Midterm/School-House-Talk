'use strict';

module.exports = function (err, req, res, next) {
  const error = err.message ? err.message : err;

  const errObject = {
    status: 500,
    message: error,
  };

  res.staus(500).json(errObject);
};

