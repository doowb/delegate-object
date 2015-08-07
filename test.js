'use strict';

var assert = require('assert');
var delegate = require('./');

describe('delegate-object', function () {
  it('should delegate all properties', function () {
    var receiver = {};
    var provider = {
      name: 'provider',
      upper: function (str) {
        return '[' + this.name + '] ' + str.toUpperCase();
      }
    };
    var receiver = delegate(receiver, provider);
    assert.deepEqual(Object.keys(receiver), Object.keys(provider));
  });

  it('should delegate specified properties', function () {
    var receiver = {};
    var provider = {
      name: 'provider',
      foo: 'bar',
      upper: function (str) {
        return '[' + this.name + '] ' + str.toUpperCase();
      }
    };
    var receiver = delegate(receiver, provider, ['name', 'upper']);
    assert.deepEqual(Object.keys(receiver), ['name', 'upper']);
  });

  it('should execute methods with the context of the receiver', function () {
    var receiver = {};
    var provider = {
      name: 'provider',
      upper: function (str) {
        return '[' + this.name + '] ' + str.toUpperCase();
      }
    };
    var receiver = delegate(receiver, provider, ['name', 'upper']);
    receiver.name = 'receiver',
    assert.deepEqual(receiver.name, 'receiver');
    assert.deepEqual(provider.name, 'provider');
    assert.deepEqual(receiver.upper('foo'), '[receiver] FOO');
  });
});
