var fs = require('fs')
var path = require('path')

var filepath = process.argv[2]
var type = '.' + process.argv[3]

fs.readdir(filepath, function (err, files) {
  if (err) throw err;
  for (var i = 0; i < files.length; i++){
    if (path.extname(files[i]) === type) {
      console.log(files[i]);
    }
  }
})

//fs.readdir(process.argv[2], function (err, list) {
//  list.forEach(function (file) {
//    if (path.extname(file) === '.' + process.argv[3])
//      console.log(file)
//  })
//})
