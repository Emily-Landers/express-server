'use strict';

function notFound(req, res, next) {
  console.error('Error!');
  res.status(404).send('Not found');
}

module.exports = notFound;