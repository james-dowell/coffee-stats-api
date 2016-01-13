var supertest = require('supertest');

request = supertest('http://localhost:8083');

request.get('/').expect(200, function(err){
 console.log(err);
});

request.get('/').expect('heya', function(err){
 console.log(err);
});
