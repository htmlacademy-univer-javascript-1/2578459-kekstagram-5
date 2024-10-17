function checkLength(string, maxLength) {
  return maxLength >= string.length;
}

function reverse(s) {
  return s.split("").reverse().join("");
}

function isPalindrome(string) {
  const lowerString = string.toLowerCase().replaceAll(' ', '');
  return reverse(lowerString) === lowerString;
}

function extractDigits(str) {
  const digits = String(str).match(/\d+/g);
  if (!digits) {
    return NaN;
  }
  return parseInt(digits.join(''), 10);
}
