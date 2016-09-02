var async = require('async');

async.waterfall([
    function (callback) {
        callback(null, one());
      },

    function (returnone, callback) {
      callback(null, two(returnone));
    },

    function (returntwo, callback) {
        callback(null, three(returntwo));
      },
], function (error, c) {
    console.log(c);
  });

function one() {
  return [12, 15];
}

function two(params) {
  let a = params[0];
  let b = params[1];

  return {
    result: (a + b) * 10,
  };
}

function three(params) {
  let cc = params.result;
  return Math.sqrt(cc);
}
