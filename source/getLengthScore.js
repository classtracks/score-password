const getLengthScore = (string) => {
  if (string.length > 30) {
    return 2;
  }
  else if (string.length > 25) {
    return 1.75;
  }
  else if (string.length > 20) {
    return 1.5;
  }
  else if (string.length > 15) {
    return 1.25;
  }
  else if (string.length > 11) {
    return 1;
  }
  else if (string.length > 7) {
    return 0.5;
  }
  else if (string.length > 3) {
    return 0.25;
  }
  return 0;
};

export default getLengthScore;
