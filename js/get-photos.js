const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// const checkStringLength = (string, length) => string.length <= length;

const getUniqueNum = (min, max) => {
  const numbers = [];

  return () => {
    if (numbers.length >= max - min + 1) {
      return null;
    }
    let number = getRandomNum(min, max);
    while (numbers.includes(number)) {
      number = getRandomNum(min, max);
    }
    numbers.push(number);
    return number;
  };
};


const getMessage = () => {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  return messages[getRandomNum(0, messages.length - 1)];
};

const getName = () => {
  const names = [
    'Максим',
    'Арина',
    'Матвей',
    'Анастасия',
    'Даниил',
    'Андрей',
    'Дарья',
    'Олег',
    'Артур',
    'Никита'
  ];

  return names[getRandomNum(0, names.length - 1)];
};

const getComments = (quantity) => {
  const minCommentId = 111111;
  const maxCommentId = 999999;
  const minCommentsPerPhoto = 5;
  const maxCommentsPerPhoto = 10;

  const comments = [];
  const getCommentId = getUniqueNum(minCommentId, maxCommentId);

  for (let i = 0; i < quantity; i++) {
    const commentsSet = [];
    const commentsSetLenght = getRandomNum(minCommentsPerPhoto, maxCommentsPerPhoto);

    for (let j = 0; j < commentsSetLenght; j++) {
      const comment = {
        id: getCommentId(),
        avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
        message: getMessage(),
        name: getName()
      };
      commentsSet[j] = comment;
    }

    comments[i] = commentsSet;
  }
  return comments;
};

const getPhotos = (quantity) => {
  const fotos = [];
  const getPhotoNumber = getUniqueNum(1, quantity);
  const comments = getComments(quantity);

  for (let i = 0; i < quantity; i++) {
    fotos[i] = {
      id: i + 1,
      url: `photos/${getPhotoNumber()}.jpg`,
      description: `описание ${i + 1}`,
      likes: getRandomNum(15, 200),
      comments: comments[i],
    };
  }

  return fotos;
};

export const photos = getPhotos(25);
