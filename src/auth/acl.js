'use strict';


module.exports = (capability => {

  return (req, res, next) => {

    try {
      if (req.user.capabilities.includes(capability)) {
        next();
      }
      else {
        next('You don\'t have access!');
      }

    } catch (error) {
      next ('Invalid Login');
    }
  };
});
