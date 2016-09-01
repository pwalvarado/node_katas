var async = require('async');

//With Object
var stackObject = {};

stackObject.userName = function (callback) {
    callback(null, 'Bob');
  };

stackObject.age = function (callback) {
    callback(null, '28');
  };

stackObject.gender = function (callback) {
    callback(null, 'Male');
  };

async.parallel(stackObject, function (err, result) {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Async parallel with Object', result);
  });
