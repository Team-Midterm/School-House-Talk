'use strict';

const validator = (req, res, next) => {
  req.query.name ? next() : next('**** name required ****');
};

module.exports = validator;
