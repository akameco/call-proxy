# call-proxy

[![Build Status](https://travis-ci.org/akameco/call-proxy.svg?branch=master)](https://travis-ci.org/akameco/call-proxy)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> call proxy

## Install

```
$ yarn add call-proxy
```

## Usage

```js
const callProxy = require('call-proxy')

let i = 0
const hello = () => `hello ${++i}`
const x = callProxy(hello)

x()
x()
x()

console.log(x.__times__)
// => 3

console.log(x.__calls__)
// [ { name: 'hello', result: 'hello 1' },
//  { name: 'hello', result: 'hello 2' },
//  { name: 'hello', result: 'hello 3' } ]
```

## API

### `loggerProxy(func)`

#### func

Type: `function`

target function.

### `__times__`

### `__calls__`

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/call-proxy/commits?author=akameco "Code") [📖](https://github.com/akameco/call-proxy/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/call-proxy/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
