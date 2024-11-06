import {getRandomInt, getRandomMessage, getRandomName} from "./data";

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

export {getCommentGenerator, createDescriptionFunction};
