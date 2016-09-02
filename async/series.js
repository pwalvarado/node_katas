var async = require('async');

console.log('using series');

async.series([
    function (callback) {
        setTimeout(function () {
            console.log('Task 1');
            callback(null, 1);
          }, 300);
      },

    function (callback) {
        setTimeout(function () {
            console.log('Task 2');
            callback(null, 2);
          }, 200);
      },

    function (callback) {
        setTimeout(function () {
            console.log('Task 3');
            callback(null, 3);
          }, 100);
      },
], function (error, results) {
    console.log(results);
  });
// Task 1
// Task 2
// Task 3
// [ 1, 2, 3 ]
//
console.log('using parallel');
async.parallel([
    function (callback) {
        setTimeout(function () {
            console.log('Task 1');
            callback(null, 1);
          }, 300);
      },

    function (callback) {
        setTimeout(function () {
            console.log('Task 2');
            callback(null, 2);
          }, 200);
      },

    function (callback) {
        setTimeout(function () {
            console.log('Task 3');
            callback(null, 3);
          }, 100);
      },
], function (error, results) {
    console.log(results);
  });

//output
// using parallel
// Task 3
// Task 2
// Task 1
// [ 1, 2, 3 ]
