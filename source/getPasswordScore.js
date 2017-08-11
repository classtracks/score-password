import doesNotRepeat from './doesNotRepeat';
import getLengthScore from './getLengthScore';
import isNotPatterned from './isNotPatterned';

const getPasswordScore = (password, ...disallowedPasswordsArrays) => {
  if (! password) {
    return 0;
  }

  const allowed = disallowedPasswordsArrays.every(disallowedPasswords => ! disallowedPasswords.includes(password));
  if (allowed) {
    return 0;
  }

  const lengthScore = getLengthScore(password);

  const hasLetters = /[a-z]/i.test(password);

  const hasSpecial = /[^a-z0-9]/i.test(password);
  const specialScore = hasSpecial ? 0.5 : 0;

  const hasExtraSpecial = /[^a-z0-9_+.-]/i.test(password);
  const extraSpecialScore = hasExtraSpecial ? 1 : 0;

  const noLettersScore = lengthScore + specialScore + extraSpecialScore;
  if (! hasLetters) {
    return noLettersScore;
  }

  const hasNumbers = /[0-9]/.test(password);
  const alphanumericScore = hasLetters && hasNumbers ? 0.5 : 0;

  const hasBothCases = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const bothCasesScore = hasBothCases ? 0.5 : 0;

  const noPatternScore = password.length > 7 && isNotPatterned(password) ? 0.5 : 0;
  const noRepeatScore = doesNotRepeat(password) ? 0.5 : 0;

  return alphanumericScore + bothCasesScore + noLettersScore + noPatternScore + noRepeatScore;
};

export default getPasswordScore;
