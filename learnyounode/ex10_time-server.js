var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function myDate () {
  var date = new Date()

  return date.getFullYear() + "-"
     + zeroFill(date.getMonth() + 1) + "-"
     + zeroFill(date.getDate()) + " "
     + zeroFill(date.getHours()) + ":"
     + zeroFill(date.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.write(myDate() + '\n')
  socket.end()
})
server.listen(process.argv[2])


