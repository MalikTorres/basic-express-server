'use strict'
;

const express = require('express');
const cors = require('cors');
const validator = require('../middleware/validator');
const notFound = require('../error-handlers/404');
const errorHandler = require('../error-handlers/500');
const logger = require('../middleware/logger');

// create express singleton
const app = express();


// middleware
app.use(cors());
app.use(express.json());
app.use(logger);

//how to use query parameters
// app.get('/helloQuery',(req,res,next)=>{
//   console.log('req.query', req.query);
//   res.status(200).send('another thing happened');
// });

// how to use path path (or URL) parameters
// create middleware to evealutate
app.get('/person',validator,(req,res,next)=>{
  console.log('query',req.query);
  res.status(200).send(req.query);
});


app.use('*',notFound);
app.use(errorHandler);

const start = (port) => app.listen(port, () => console.log('listening on port:', port));

module.exports = { start, app };
