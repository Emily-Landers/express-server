'use strict';

function serverError(err, req, res, next) {
  console.error('The server is not stoked right now.');
  console.log(err);
  res.status(500).send('Server Error');
}

module.exports = serverError;