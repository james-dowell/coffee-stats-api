import * as supertest from 'supertest';

'use strict';

const request = supertest('http://localhost:8083');

describe('Getting coffee stata', () => {

    it('should have a stats endpoint', (done) => {

        request.get('/stats').expect(200, done);

    });

});
