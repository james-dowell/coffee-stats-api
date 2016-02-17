import * as supertest from 'supertest';

const request = supertest('http://localhost:8083');

describe('Saving new stats', () => {

    it('should have an endpoint to submit a new stat', (done) => {

        let stat = { cups: 2 };

        request.post('/stat')
               .send(stat)
               .expect(201)
               .end(done);

    });

    it('should return a 400 bad request with an error if a submitted stat is not in the correct format', (done) => {

        let stat = { cups: 'banter' };

        request.post('/stat')
               .send(stat)

               //HACK: typescript definition
               .expect(<any>400, <any>{
                   error: 'Invalid coffee stat submission'
               }, done);

    });

    it('should return a 404 if any endpoint does not exist', (done) => {

        let stat = { cups: 2 };

        request.post('/stat-banter')
               .send(stat)
               .expect(404)
               .end(done);

    });

});
