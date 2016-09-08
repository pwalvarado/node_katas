'use strict';
var rewire = require('rewire');
var assert = require('chai').assert;
var app = rewire('./app.js');
var logError = app.__get__('logMongoError');

describe('Application module', function () {
  it('should output the correct error', function (done) {
      assert.equal(logError(), false);
      done();
    });
});
