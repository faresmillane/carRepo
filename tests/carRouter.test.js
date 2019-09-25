/* eslint-disable */
const chai = require('chai');
const app = require('../app')

chai.use(require('chai-http'));
chai.should();

describe('Car router', function(){
    describe('GET /car', function(){
        it('should return an array of Cars', function(done){
            chai.request(app).get('/car').end((err, res) =>{
                if(err) done(err);
                //this.timeout(5000);
                res.should.have.status('200');
                res.body.should.be.a('object');
                done();
            })
        })
    })
})