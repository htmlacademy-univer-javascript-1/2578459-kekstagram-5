function checkLength(string, maxLength) {
  return maxLength >= string.length;
}

function reverse(s) {
  return s.split('').reverse().join('');
}

function isPalindrome(string) {
  const lowerString = string.toLowerCase().replaceAll(' ', '');
  return reverse(lowerString) === lowerString;
}

function extractDigits(string) {
  const digits = String(string).match(/\d+/g);
  if (!digits) {
    return NaN;
  }
  return parseInt(digits.join(''), 10);
}

// Cтрока короче 20 символов
checkLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLength('проверяемая строка', 10); // false

// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс');  // false

// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true

extractDigits('2023 год');            // 2023
extractDigits('ECMAScript 2022');     // 2022
extractDigits('1 кефир, 0.5 батона'); // 105
extractDigits('агент 007');           // 7
extractDigits('а я томат');           // NaN

extractDigits(2023); // 2023
extractDigits(-1);   // 1
extractDigits(1.5);  // 15
