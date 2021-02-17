# is-incoming-message
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Check if value is an incoming message (`req`).

## Installation
```bash
$ npm install is-incoming-message
```

## Usage
```js
const isReq = require('is-incoming-message')
const http = require('http')

http.createServer((req, res) => {
  isReq(req)
  // => true
})

```

## See Also
- [is-server-response](https://github.com/yoshuawuyts/is-server-response)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/is-incoming-message.svg?style=flat-square
[npm-url]: https://npmjs.org/package/is-incoming-message
[travis-image]: https://img.shields.io/travis/yoshuawuyts/is-incoming-message/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/is-incoming-message
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/is-incoming-message/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/is-incoming-message
[downloads-image]: http://img.shields.io/npm/dm/is-incoming-message.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/is-incoming-message
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
