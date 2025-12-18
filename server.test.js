const request = require('supertest');
const app = require('./server');

describe('API Endpoints', () => {

  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to CI/CD Demo API');
  });

  test('GET /users should return users array', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(3);
  });

});