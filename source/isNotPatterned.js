const isNotPatterned = (string) => {
  const patternedRegex = /(..)\1/;
  return ! patternedRegex.test(string);
};

export default isNotPatterned;
