"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isNotPatterned = function isNotPatterned(string) {
  var patternedRegex = /(..)\1/;
  return !patternedRegex.test(string);
};

exports.default = isNotPatterned;