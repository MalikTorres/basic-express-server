'use strict';

module.exports = (req,res,next) =>{
  console.log({
    // express methods to show path and method shown in code review
    method: req.method,
    path: req.path,
  });
  next();
};

