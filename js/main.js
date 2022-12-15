const getRandomInt = (min, max) => {
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
};

const checkStringLength = (string, length) => {
  const result = string.length <= length;
  return result;
};

const getIds = (quantity) => {
  const ids = [];

  for (let i = 0; i < quantity; i++) {
    ids[i] = i + 1;
  }

  return ids;
};

const getMixedNumbers = (quantity) => {
  const mixedNumbers = [];

  for (let i = 0; i < quantity; i++) {
    let number = getRandomInt(1, quantity);
    while (mixedNumbers.includes(number)) {
      number = getRandomInt(1, quantity);
    }
    mixedNumbers[i] = number;
  }

  return mixedNumbers;
};

const getUrls = (quantity) => {
  const urls = [];
  const mixedNumbers = getMixedNumbers(quantity);

  for (let i = 0; i < quantity; i++) {
    const url = `photos/${mixedNumbers[i]}.jpg`;
    urls[i] = url;
  }

  return urls;
};

const getDescriptions = (quantity) => {
  const descriptions = [];

  for (let i = 0; i < quantity; i++) {
    descriptions[i] = `описание фотографии ${i + 1}`;
  }

  return descriptions;
};

const getLikes = (quantity) => {
  const likes = [];
  const minLikesCount = 15;
  const maxLikesCount = 200;

  for (let i = 0; i < quantity; i++) {
    likes[i] = getRandomInt(minLikesCount, maxLikesCount);
  }

  return likes;
};

const getCommentId = () => {
  const commentsIds = [];

  return () => {
    let commentId = getRandomInt(100, commentsIds.length + 200);

    while(commentsIds.includes(commentId)) {
      commentId = getRandomInt(100, commentsIds.length + 200);
    }

    commentsIds.push(commentId);
    return commentId;
  };
};

const getAvatar = () => {
  const avatar = `img/avatar-${getRandomInt(1, 6)}.svg`;
  return avatar;
};

const getMessage = () => {
  const phrases = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const message = [];
  const messageLength = getRandomInt(1, 2);

  for (let i = 0; i < messageLength; i++) {
    let phrase = phrases[getRandomInt(0, phrases.length - 1)];
    while (message.includes(phrase)) {
      phrase = phrases[getRandomInt(0, phrases.length - 1)];
    }
    message[i] = phrase;
  }

  return message.join(' ');
};

const getName = () => {
  const names = [
    'Егор',
    'Ярослав',
    'Виктория',
    'Варвара',
    'Михаил',
    'Матвей',
    'Макар',
    'Александр',
    'Илья',
    'Иван'
  ];

  const name = names[getRandomInt(0, names.length - 1)];
  return name;
};

const getComments = (quantity) => {
  const comments = [];
  const commentId = getCommentId();

  for (let i = 0; i < quantity; i++) {
    const commentsSet = [];
    const setLength = getRandomInt(5, 15);

    for (let j = 0; j < setLength; j++) {
      const comment = {
        avatar: getAvatar(),
        message: getMessage(),
        name: getName(),
      };
      commentsSet[j] = comment;
    }

    commentsSet.forEach((comment) => {
      comment.id = commentId();
    });
    comments[i] = commentsSet;
  }

  return comments;
};

const getPhotos = (quantity) => {
  const photos = [];
  const ids = getIds(quantity);
  const urls = getUrls(quantity);
  const descriptions = getDescriptions(quantity);
  const likes = getLikes(quantity);
  const comments = getComments(quantity);

  for (let i = 0; i < quantity; i++) {
    const photo = {
      id: ids[i],
      url: urls[i],
      description: descriptions[i],
      likes: likes[i],
      comments: comments[i],
    };
    photos.push(photo);
  }

  return photos;
};

checkStringLength();
getPhotos(25);
