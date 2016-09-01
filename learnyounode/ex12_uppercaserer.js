var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (inStream, outStream) {
  if (inStream.method != 'POST')
    return outStream.end('send me a POST\n')
  if(inStream.method == 'POST') {
    inStream.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(outStream)
  }
})

server.listen(process.argv[2])


