const request = require('supertest');
const app = require('../appExpress');

describe("appExpress", () => {
	test('test api /hello', async () => {
		const response = await request(app).get('/hello');
		expect(response.status).toBe(200);
		expect(response.text).toMatchSnapshot();
	});

	test('test api /random', async () => {

		jokesNock.get('/jokes/random').reply(200, mockResponseRandom);

		const response = await request(app).get('/random');
		expect(response.status).toBe(200);
		expect(response.body).toEqual(mockResponseRandom);
		expect(response.body).toMatchSnapshot();

	});
});
