function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(3, 5);

function checkStringLength (string, length) {
  if (string.length > length) {
    return false;
  }
  return true;
}

checkStringLength('hi', 1);

function getIds (quantity) {
  const ids = [];

  for (let i = 1; i <= quantity; i++) {
    const id = i;
    ids.push(id);
  }

  return ids;
}

function getPhotos (quantity) {
  const photos = [];
  const ids = getIds(quantity);

  for (let i = 0; i < quantity; i++) {
    const photo = {
      id: ids[i],
    };

    photos.push(photo);
  }

  return photos;
}

console.log(getPhotos(25));
