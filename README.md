# adppend [![Build Status](https://api.travis-ci.org/h2non/adppend.svg?branch=master)][travis] [![Code Climate](https://codeclimate.com/github/h2non/adppend/badges/gpa.svg)](https://codeclimate.com/github/h2non/adppend)

Append content dinamically between DOM nodes easily, specially implemented for Web advertisement purposes

As features, it is really tiny (>100 SLOC) and it has no coupling to third-party libraries, such as jQuery, Zepto... it's only pure JavaScript with native DOM API consumption

For usage details, see the [examples](https://github.com/h2non/adppend/tree/master/examples) and [API](#api) documentation

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
<script src="//cdn.rawgit.com/h2non/adppend/0.1.1/adppend.js"></script>
```

### Environments

- Chrome >= 5
- Firefox >= 3
- Safari >= 5
- Opera >= 10
- IE >= 9

### Usage

Append a `video` element between `p` elements already present in DOM
```js
adppend('p').append('<video src="/ad.ogg"></video>')
```

## API

### adppend(querySelector)

Create a new adppend instance attached to a custom DOM elements.
`querySelector` argument must be a valid [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors) expression query

```js
adppend('#content > ul')
```

#### adppend#append(htmlString|Node)

Intersect a custom raw HTML code or DOM Node Element between the selected nodes

```js
adppend('#content > ul')
  .append('<video src="ad.ogg"></video>')
```

#### adppend#appendChild(htmlString|Node)

Intersect a custom raw HTML code or DOM Node Element between the child selected nodes

```js
adppend('#content')
  .appendChild('<video src="ad.ogg"></video>')
```

#### adppend#percentage(num)

Define the intersection percentage to append content between selected nodes. Defaul to `60`

```js
adppend('#content > ul')
  .percentage(25)
  .append('<img src="ad.gif" />')
```

### adppend.VERSION

Current library semantic version

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
