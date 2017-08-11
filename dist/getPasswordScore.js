'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _doesNotRepeat = require('./doesNotRepeat');

var _doesNotRepeat2 = _interopRequireDefault(_doesNotRepeat);

var _getLengthScore = require('./getLengthScore');

var _getLengthScore2 = _interopRequireDefault(_getLengthScore);

var _isNotPatterned = require('./isNotPatterned');

var _isNotPatterned2 = _interopRequireDefault(_isNotPatterned);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPasswordScore = function getPasswordScore(password) {
  for (var _len = arguments.length, disallowedPasswordsArrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    disallowedPasswordsArrays[_key - 1] = arguments[_key];
  }

  if (!password) {
    return 0;
  }

  var allowed = disallowedPasswordsArrays.every(function (disallowedPasswords) {
    return !disallowedPasswords.includes(password);
  });
  if (allowed) {
    return 0;
  }

  var lengthScore = (0, _getLengthScore2.default)(password);

  var hasLetters = /[a-z]/i.test(password);

  var hasSpecial = /[^a-z0-9]/i.test(password);
  var specialScore = hasSpecial ? 0.5 : 0;

  var hasExtraSpecial = /[^a-z0-9_+.-]/i.test(password);
  var extraSpecialScore = hasExtraSpecial ? 1 : 0;

  var noLettersScore = lengthScore + specialScore + extraSpecialScore;
  if (!hasLetters) {
    return noLettersScore;
  }

  var hasNumbers = /[0-9]/.test(password);
  var alphanumericScore = hasLetters && hasNumbers ? 0.5 : 0;

  var hasBothCases = /[a-z]/.test(password) && /[A-Z]/.test(password);
  var bothCasesScore = hasBothCases ? 0.5 : 0;

  var noPatternScore = password.length > 7 && (0, _isNotPatterned2.default)(password) ? 0.5 : 0;
  var noRepeatScore = (0, _doesNotRepeat2.default)(password) ? 0.5 : 0;

  return alphanumericScore + bothCasesScore + noLettersScore + noPatternScore + noRepeatScore;
};

exports.default = getPasswordScore;