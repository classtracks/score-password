const doesNotRepeat = (string) => {
  const repeatingRegex = /(.)\1/;
  return ! repeatingRegex.test(string);
};

export default doesNotRepeat;
