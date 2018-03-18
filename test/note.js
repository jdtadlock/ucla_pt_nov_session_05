var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../server');

chai.use(chaiHttp);

describe('/GET Note', function() {
  it('it should GET all the notes from the db', function(done) {
    chai.request(server)
      .get('/api/notes')
      .end(function(err, res) {
        // res.should.have.status(400);
        res.body.should.be.a('array');
        // res.body.length.should.be.eql(2);
        done();
      })
  });
});