import request from 'supertest';
import app from '../src/index';

describe('GET /test', () => {
  it('should respond with a message', async () => {
    const response = await request(app).get('/test');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'This is a test API endpoint' });
  });
});