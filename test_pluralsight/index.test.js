'use strict';

var chai = require('chai');
var expect = chai.expect;

chai.should();

function isEven(num) {
  return num % 2 === 0;
}

describe('isEven', function () {
  it('return true if num is even', function () {
    isEven(4).should.be.true;
  });
});