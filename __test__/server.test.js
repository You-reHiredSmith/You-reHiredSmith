
const path = require('path')
const request = require('supertest');
const server = 'http://localhost:3000';

// describe('test', () => {
  // test('the data is peanut butter', () => {
  //   return request(server)
  //   .get('/')
  //   .then(data => {
  //     expect(data).not.toBeInstanceOf(Error)
  //     // expect(data).toBe('peanut butter');
  //   })
  // })
// })

describe('/', () => {
  describe('GET', () => {
    it('responds with 200 status and text/html content type', () => {
      return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200)
    })
  })
})
