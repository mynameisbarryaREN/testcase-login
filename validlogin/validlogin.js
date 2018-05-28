var request = require('superagent');
var chai = require('chai'), 
expect = chai.expect, 
should = chai.should(), 
assert = chai.assert;
var expect = require('chai').expect;

var root_url = "http://staging-adexchange.vayafi.com/login";

var testcase = ['kyxyf', 'Abc123456@']
var returnvalue = 'user Intern2017 has no role undefined'

exports.get = 
[
    function (done) {
        request.post(root_url)
            .set('Content-Type', 'application/json')
            .set('token', '83b58860-5fa9-4a93-9b70-9747e9919b00')
            .send({ "username": testcase[0], "password": testcase[1] })
            .end(function (err, res, body) {
                //expect(res.text).to.equal(returnvalue);
                console.log(res.text);
                done();
            });
    },
    "Logged in Succesfully"
]