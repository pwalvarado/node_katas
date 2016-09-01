var fs = require('fs')
var path = require('path')

module.exports = function (dir, filetype, callback){
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err);
    var myary = []
    list.forEach(function (file) {
      if (path.extname(file) === '.' + filetype)
        myary.push(file)
    })
    return callback(null,myary)
  })
}

// solution_filter.js:

//     var fs = require('fs')
//     var path = require('path')

//     module.exports = function (dir, filterStr, callback) {

//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }
