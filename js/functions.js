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

function checkTime(beginTime, endTime, meetingTime, duration) {
  let beginHour = parseInt(beginTime.split(':')[0]);
  let beginMinute = parseInt(beginTime.split(':')[1]);
  let endHour = parseInt(endTime.split(':')[0]);
  let endMinute = parseInt(endTime.split(':')[1]);
  let meetingHour = parseInt(meetingTime.split(':')[0]);
  let meetingMinute = parseInt(meetingTime.split(':')[1]);
  meetingMinute += duration;
  if (meetingMinute >= 60) {
    meetingHour += Math.floor(meetingMinute / 60);
    meetingMinute %= 60;
  }
  return beginHour <= meetingHour && beginMinute <= meetingMinute && meetingHour <= endHour && meetingMinute <= endMinute;
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
isPalindrome('Кекс'); // false

// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true

extractDigits('2023 год'); // 2023
extractDigits('ECMAScript 2022'); // 2022
extractDigits('1 кефир, 0.5 батона'); // 105
extractDigits('агент 007'); // 7
extractDigits('а я томат'); // NaN

extractDigits(2023); // 2023
extractDigits(-1); // 1
extractDigits(1.5); // 15

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
checkTime('08:00', '17:30', '14:00', 90); // true
checkTime('8:0', '10:0', '8:0', 120);     // true
checkTime('08:00', '14:30', '14:00', 90); // false
checkTime('14:00', '17:30', '08:0', 90);  // false
checkTime('8:00', '17:30', '08:00', 900); // false

