const http = require('http')

module.exports = isIncomingMessage

// check if value is an incoming message on
// the server
// any? -> bool
function isIncomingMessage (res) {
  return res instanceof http.IncomingMessage
}

