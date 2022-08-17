const request = require('supertest');
const nock = require('nock');
const app = require('../appKoa').callback();


describe("appKoa", () => {

	test('test api /hello', async () => {
		const response = await request(app).get('/hello');
		expect(response.status).toBe(200);
		expect(response.text).toMatchSnapshot();
	});

	test('test api /random', async () => {


		const response = await request(app).get('/random');
		expect(response.status).toBe(200);
		expect(response.body).toEqual(mockResponseRandom);
		expect(response.body).toMatchSnapshot();

	});
});
