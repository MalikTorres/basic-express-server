'use strict';

// TODO: write middleware
// Replace params from demo to query
module.exports = (req, res, next) => {
  if(req.query.name){
    next();
  } else {
    next('The query has to be a name');
  }
};
