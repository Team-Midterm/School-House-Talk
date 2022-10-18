'use strict';

const validator = (req, res, next) => {
  // need to look into adding a more specific information on the exact part of the model or query is missing
  req.query.name ? next() : next('**** name required ****');
};

module.exports = validator;
