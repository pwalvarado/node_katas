var fs = require('fs')

filename = process.argv[2]

fs.readFile(filename, "utf8", function(err, data) {
  if (err) throw err;
  var ary = data.toString().split('\n');
  console.log(ary.length - 1);
});

//    var fs = require('fs')
//    var file = process.argv[2]
    
//    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
//      var lines = contents.toString().split('\n').length - 1
//      console.log(lines)
//    })

