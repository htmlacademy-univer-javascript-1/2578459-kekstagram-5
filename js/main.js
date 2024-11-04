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

function getCommentGenerator() {
  let id = 0;
  return function () {
    id++;
    return {
      id: id,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getRandomMessage(),
      name: getRandomName()
    };
  };
}

function createDescriptionFunction() {
  let id = 0;
  const description = 'hello, world!';
  const commentGenerator = getCommentGenerator();
  return function () {
    id++;
    const count = getRandomInt(0, 30);
    const comments = [];
    for (let i = 0; i < count; i++) {
      comments.push(commentGenerator());
    }
    return {
      id: id,
      url: `photos/${id}.jpg`,
      description: description,
      likes: getRandomInt(15, 200),
      comments: comments,
    };
  };
}

const descriptionGenerator = createDescriptionFunction();
const countDescription = getRandomInt(1, 10);
for (let i = 0; i < countDescription; i++) {
  descriptionGenerator().id = 2;
}
