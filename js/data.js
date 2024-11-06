function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomMessage() {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  return messages[getRandomInt(0, 5)];
}

function getRandomName() {
  const names = [
    'Дмитрий',
    'Алексей',
    'Станислав',
    'Антон',
    'Артём',
    'Игорь'
  ];
  return names[getRandomInt(0, 5)];
}

export {getRandomInt, getRandomName, getRandomMessage};
