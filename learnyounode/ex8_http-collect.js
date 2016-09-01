var http = require('http')
var bl = require('bl')
var str = ''

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    str = data.toString()
    console.log(str.length)
    console.log(str)
  }))
  response.on('error', console.error)
})


/*
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})

*/
