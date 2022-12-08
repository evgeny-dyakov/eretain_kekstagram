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

const getCommentsSet = () => {
  const commentsSet = [];
  const setLength = getRandomInt(5, 15);

  for (let j = 0; j < setLength; j++) {
    const comment = {
      avatar: 'img/avatar-3.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'eretain',
    };
    commentsSet[j] = comment;
  }

  return commentsSet;
};

const getComments = (quantity) => {
  const comments = [];
  let commentId = 1;

  for (let i = 0; i < quantity; i++) {
    const commentsSet = getCommentsSet();

    commentsSet.forEach((comment) => {
      comment.id = commentId;
      commentId++;
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

console.log(getPhotos(5));
