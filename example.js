'use strict';

var delegate = require('./');

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
