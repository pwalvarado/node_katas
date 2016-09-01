var async = require('async');
//With Array
var stack = [];

var functionOne = function (callback) {
    callback(null, 'First function result');
  };

var functionTwo = function (callback) {
    callback(null, 'Second function result');
  };

var functionThree = function (callback) {
    callback(null, 'Third function result');
  };

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.parallel(stack, function (err, result) {
    console.log('Async parallel with array', result);
  });

// output
// Async parallel with array [ 'First function result',
//   'Second function result',
//   'Third function result' ]
