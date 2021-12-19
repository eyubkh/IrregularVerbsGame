const request = require('supertest')
const app = require('../app')

test("Testing GET method", async () => {
  await request(app) 
    .get('/api/')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test("Testing error method", async () => {
  await request(app) 
    .get('/error')
    .expect(404)
})