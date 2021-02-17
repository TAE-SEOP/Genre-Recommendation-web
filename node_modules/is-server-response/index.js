const http = require('http')

module.exports = isServerResponse

// check if value is a server response
// any? -> bool
function isServerResponse (res) {
  return res instanceof http.ServerResponse
}
