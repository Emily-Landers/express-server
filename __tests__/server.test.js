'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const req = supertest(server.app);

describe('Testing my HTTP server', () => {

    it('Should be responding to a GET to /person', async () => {
        let res = await req.get('/person?name=test');
    
        expect(res.status).toEqual(200);
        expect(res.body.name).toEqual('test');
      });

    // it('Should be able to respond to a POST to /message', async() => {
    //     let res = await req.post('/message?text=test&author=test');

    //     expect(res.status).toEqual(200)
    //     expect(res.body[0].text).toEqual('test');
    // });
        it('Should be responding to no name query', async () => {  
            let res = await req.get('/person?name=');
        
            expect(res.status).toEqual(500);
          });
          it('Should be responding to a bad route', async () => {
            let res = await req.get('/test');
        
            expect(res.status).toEqual(404);
    });
});
