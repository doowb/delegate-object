/*!
 * delegate-object <https://github.com/doowb/delegate-object>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Copy properties from an object to another object, where properties
 * with function values will be invoked in the context of the receiver,
 * and properties with non-function values are just copied.
 *
 * ```js
 * var receiver = {};
 * var provider = {
 *   name: 'provider',
 *   upper: function (str) {
 *     return '[' + this.name + '] ' + str.toUpperCase();
 *   }
 * };
 * var receiver = delegate(receiver, provider);
 * receiver.name = 'receiver';
 * console.log(receiver.upper('foo'));
 * //=> [receiver] FOO
 * ```
 *
 * @param  {Object} `receiver` Object to receive properties.
 * @param  {Object} `provider` Object providing properties.
 * @param  {Array} `keys` Optional array of keys to delegate.
 * @return {Object} Modified `receiver` object with properties from `provider`
 * @api public
 */

function delegate(receiver, provider, keys) {
  keys = keys || allKeys(provider);
  keys = Array.isArray(keys) ? keys : [keys];

  keys.forEach(function (key) {
    var val = provider[key];

    if (typeof val === 'function') {
      receiver[key] = function () {
        return provider[key].apply(receiver, arguments);
      };
    } else {
      receiver[key] = val;
    }
  });
  return receiver;
}

/**
 * Get all the keys from an object, including keys
 * inherited through a prototype chain
 *
 * ```js
 * var keys = allKeys({foo: 'bar', bar: 'baz'});
 * //=> ['foo', 'bar']
 * ```
 *
 * @param  {Object} `obj` Object to get keys from
 * @return {Array} Array of keys
 */

function allKeys (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
}

/**
 * Export `delegate` function
 */

module.exports = delegate;
