'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const req = supertest(server.app);

describe('Just testing the ol HTTP server', () => {

  it('Should be responding to a GET to /person', async () => {

    let res = await req.get('/person?name=test');

    expect(res.status).toEqual(200);
    console.log('This should be a test too - ', + res.body.name);
    expect(res.body.name).toEqual('test');
  });
});