const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// const checkStringLength = (string, length) => string.length <= length;

const getRandomUniqueNumber = (min, max) => {
  const numbers = [];

  return () => {
    if (numbers.length >= max - min + 1) {
      console.error(`вне диапазона от ${min} до ${max}`);
      return;
    }
    let number = getRandomInt(min, max);
    while (numbers.includes(number)) {
      number = getRandomInt(min, max);
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

  return messages[getRandomInt(0, messages.length - 1)];
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
  return names[getRandomInt(0, names.length - 1)];
};

const getComments = (quantity) => {
  const comments = [];
  const getCommentId = getRandomUniqueNumber(100, 999);

  for (let i = 0; i < quantity; i++) {
    const commentsSet = [];
    const commentsSetLenght = getRandomInt(5, 10);

    for (let j = 0; j < commentsSetLenght; j++) {
      const comment = {
        id: getCommentId(),
        avatar: `img/avatar${getRandomInt(1, 6)}`,
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
  const photos = [];
  const getPhotoNumber = getRandomUniqueNumber(1, quantity);
  const comments = getComments(quantity);

  for (let i = 0; i < quantity; i++) {
    photos[i] = {
      id: i + 1,
      url: `photos/${getPhotoNumber()}.jpg`,
      description: `описание ${i + 1}`,
      likes: getRandomInt(15, 200),
      comments: comments[i],
    };
  }

  return photos;
};

export {getPhotos};
