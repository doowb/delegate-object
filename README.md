# delegate-object [![NPM version](https://badge.fury.io/js/delegate-object.svg)](http://badge.fury.io/js/delegate-object)  [![Build Status](https://travis-ci.org/doowb/delegate-object.svg)](https://travis-ci.org/doowb/delegate-object)

> Copy properties from an object to another object, where properties with function values will be invoked in the context of the receiver, and properties with non-function values are just copied.

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i delegate-object --save
```

## Usage

```js
var delegateObject = require('delegate-object');
```

## API

### [delegate](index.js#L36)

Copy properties from an object to another object, where properties with function values will be invoked in the context of the receiver, and properties with non-function values are just copied.

**Params**

* `receiver` **{Object}**: Object to receive properties.
* `provider` **{Object}**: Object providing properties.
* `keys` **{Array}**: Optional array of keys to delegate.
* `returns` **{Object}**: Modified `receiver` object with properties from `provider`

**Example**

```js
var receiver = {};
var provider = {
  name: 'provider',
  upper: function (str) {
    return '[' + this.name + '] ' + str.toUpperCase();
  }
};
var receiver = delegate(receiver, provider);
receiver.name = 'receiver';
console.log(receiver.upper('foo'));
//=> [receiver] FOO
```

## Related projects

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/doowb/delegate-object/issues/new)

## Author

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb)

## License

Copyright © 2015 Brian Woodward
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 06, 2015._