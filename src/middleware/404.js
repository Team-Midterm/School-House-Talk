'use strict';

module.exports = function (err, req, res, next) {
  const error = err.message ? err.message : err;

  const errObject = {
    status: 404,
    message: error,
    route: req.path,
  };

  res.status(404).json(errObject);
};

