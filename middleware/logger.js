'use strict';

module.exports = (req,res,next) =>{
  console.log('Logger', req.method,req.url);
  next();
}

