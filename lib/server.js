'use strict'
 const express = require('express');
 const app = express();

 const notFound = require('./error-handlers/404.js');
 const serverError = require('./error-handlers/500.js');
 const logger = require('./middleware/logger.js');
 const validator = require('./middleware/validator.js');

 app.use(express.json());

 class Name {
     constructor(name){
         this.name = name;
     }
 }

app.use(logger);
app.get('/person', validator, (req, res, next) => {
    console.log(req.query.name)
    let { name } = req.query;

    let names = new Name(name);
    console.log(names);
    res.json(names);
});

app.use(notFound)
app.use(serverError);

module.exports = {
    start: function (port) {
      app.listen(port, () => {
        console.log('Server is up and running on', port);
      });
    },
    app,
  };