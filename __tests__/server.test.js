'use strict';
require('dotenv').config();
const server = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(server.server);

describe('api server', () => {
  describe('checking routes status when', () => {
    it('we have a bad route with 404', async () => {
      //arrange
      let route = '/api/v1/foo';

      //act
      let response = await request.get(route);
      //assert
      expect(response.status).toEqual(404);
    });
    it('we have a bad method with 404', async () => {
      let route = '/api/v1/food';

      let response = await request.delete(route);
      expect(response.status).toEqual(404);
    });
    it('we have /clothes with 200', async () => {
      const response = await request.get('/api/v1/clothes');
      expect(response.status).toEqual(200);
    });
    it('we have /food with 200', async () => {
      const response = await request.get('/api/v1/food');
      expect(response.status).toEqual(200);
    });
  });

  describe('checking the status code and returned data for', () => {
    let id;
    describe('/clothes', () => {
      it('on record using POST', async () => {
        //arrange
        let clothes = {
          name: 'jeans',
          quantity: 3,
        };
        //act
        let response = await request.post('/api/v1/clothes').send(clothes);
        //assert
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('jeans');
        expect(response.body.quantity).toEqual('3');
        id = response.body._id;
      });
      it('on record using GET', async () => {
        //arrange

        //act
        let response = await request.get('/api/v1/clothes');
        //assert
        expect(response.status).toEqual(200);
      });
      it('on record using PUT', async () => {
        //arrange

        //act
        let response = await request.put(`/api/v1/clothes/${id}`).send({
          name: 't-shirt',
          quantity: 5,
        });
        //assert
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('t-shirt');
      });
      it('on record using GET/:id', async () => {
        //arrange
        //act
        const response = await request.get(`/api/v1/clothes/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body[0].name).toEqual('t-shirt');
      });
    });
    describe('/food', () => {
      it('on record using POST', async () => {
        //arrange
        let food = {
          name: 'burger',
          quantity: 3,
        };
        //act
        let response = await request.post('/api/v1/food').send(food);
        //assert
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('burger');
        expect(response.body.quantity).toEqual('3');
        id = response.body._id;
      });
      it('on record using GET', async () => {
        //arrange

        //act
        let response = await request.get('/api/v1/food');
        //assert
        expect(response.status).toEqual(200);
      });
      it('on record using PUT', async () => {
        //arrange

        //act
        let response = await request.put(`/api/v1/food/${id}`).send({
          name: 'shawerma',
          quantity: 5,
        });
        //assert
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('shawerma');
      });
      it('on record using GET/:id', async () => {
        //arrange
        //act
        const response = await request.get(`/api/v1/food/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body[0].name).toEqual('shawerma');
      });
    });
  });
});
