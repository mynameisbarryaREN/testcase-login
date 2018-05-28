validlogin = require('../testcase-login/validlogin/validlogin.js')

var _ = require("lodash");

testResult = [
    validlogin.get
];

describe("Connection", function () {
    _.forEach(testResult,function (testValue) {
        it(testValue[1],testValue[0]) 
    })
})