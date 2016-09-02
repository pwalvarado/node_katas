// http://caolan.github.io/async/docs.html#.parallel
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
