var http = require('http')
var map = require('through2-map')
var url = require('url')

var server = http.createServer(function (req, res) {
  parsed = url.parse(req.url, true)

  if (parsed.pathname == '/api/parsetime') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    date = new Date(parsed.query.iso)

    return res.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
     }, null, '\t')
    )
  }

  if (parsed.pathname == '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    date = new Date(parsed.query.iso)

    return res.end(JSON.stringify({
      unixtime: date.getTime()
     }, null, '\t')
    )
  }
})
