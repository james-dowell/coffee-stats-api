import * as supertest from 'supertest';

'use strict';

const request = supertest('http://localhost:8083');

describe('Saving new stats', () => {

    it('should have an endpoint to submit a new stat', (done) => {

        let stat = { cups: 2 };

        request.post('/stat')
               .send(stat)
               .expect(200)
               .end(done);

    });

});
