'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const req = supertest(server.app);

describe('This is a test of the login system, this is only a test', () => {

  it('This should be a new login response', async () => {
    const res = await jest.spyOn(console, 'log');

    console.log('test');

    expect(res).toHaveBeenCalledWith('test');
  });
});
