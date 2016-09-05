// 'use strict';
var rewire = require('rewire');
//var chai = require('chai');
var expect = require('chai').expect;

var app = rewire('./app.js');

var logError = app.__get__('logMongoError');
debugger;

describe('Application module', function () {

  it('should output the correct error', function (done) {
      logError().should.equal('MongoDB Connection Error. Please make sure that MongoDB is running.');
      done();
    });
});
