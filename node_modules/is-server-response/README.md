# is-server-response
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Check if value is a server response (`res`).

## Installation
```bash
$ npm install is-server-response
```

## Usage
```js
const isRes = require('is-server-response')
const http = require('http')

http.createServer((req, res) => {
  isRes(res)
  // => true
})
```

## See Also
- [is-incoming-message](https://github.com/yoshuawuyts/is-incoming-message)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/is-server-response.svg?style=flat-square
[npm-url]: https://npmjs.org/package/is-server-response
[travis-image]: https://img.shields.io/travis/yoshuawuyts/is-server-response/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/is-server-response
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/is-server-response/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/is-server-response
[downloads-image]: http://img.shields.io/npm/dm/is-server-response.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/is-server-response
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
