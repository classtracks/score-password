"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var doesNotRepeat = function doesNotRepeat(string) {
  var repeatingRegex = /(.)\1/;
  return !repeatingRegex.test(string);
};

exports.default = doesNotRepeat;