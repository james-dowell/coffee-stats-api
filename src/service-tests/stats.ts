import * as supertest from 'supertest';

const request = supertest('http://localhost:8083');

describe('Getting coffee stats', () => {

    it('should have a stats endpoint', (done) => {

        request.get('/stat').expect(200, done);

    });

});
