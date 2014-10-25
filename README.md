# adppend [![Build Status](https://api.travis-ci.org/h2non/adppend.svg?branch=master)][travis] [![Code Climate](https://codeclimate.com/github/h2non/adppend/badges/gpa.svg)](https://codeclimate.com/github/h2non/adppend)

Append content dinamically between DOM nodes easily, specially implemented for Web advertisement proposals

## Installation

Via [Bower](http://bower.io)
```bash
bower install adppend
```

Via [Component](http://component.io/)
```bash
component install h2non/adppend
```

Or loading the script remotely
```html
<script src="//cdn.rawgit.com/h2non/adppend/0.1.0/adppend.js"></script>
```

### Environments

- Chrome >= 5
- Firefox >= 3
- Safari >= 5
- Opera >= 10
- IE >= 9

### Usage

Append a `video` between `p` elements present in DOM
```js
adppend('p').append('<video src="/ad.ogg"></video>')
```

## API

### adppend()

## Contributing

Wanna help? Cool! It will be appreciated :)

You must add new test cases for any new feature or refactor you do,
always following the same design/code patterns that already exist

### Development

Only [node.js](http://nodejs.org) is required for development

Clone the repository
```bash
$ git clone https://github.com/h2non/adppend.git && cd adppend
```

Install dependencies
```bash
$ npm install
```
```bash
$ bower install
```

Generate browser bundle source
```bash
$ make browser
```

Run tests
```bash
$ make test
```

## License

[MIT](http://opensource.org/licenses/MIT) © Tomas Aparicio

[travis]: http://travis-ci.org/h2non/adppend
