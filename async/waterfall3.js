var async = require('async');

function run(event) {
  // Or, with named functions:
  async.waterfall([
      bypass,
      myFirstFunction,
      mySecondFunction,
      myLastFunction,
  ], function (err, result) {
      // result now equals 'done'
      console.log(result);
    });

  function bypass(callback) {
    callback(null, event);
  }

  function mySecondFunction(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
    var three = (arg1 + arg2) * 10;
    callback(null, three);
  }

  function myLastFunction(arg1, callback) {
    // arg1 now equals 'three'
    var done = Math.sqrt(arg1);
    callback(null, done);
  }
}

function myFirstFunction(arg1, callback) {
  var params = 2 * arg1;
  callback(null, params, 15);
}

run(6);
