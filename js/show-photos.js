import {getPhotos} from './get-photos.js';

const photos = getPhotos(25);

console.log(photos);

const photosList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content;
const photoFragment = document.createDocumentFragment();

photos.forEach(({url, likes, comments}) => {
  const renderPhoto = photoTemplate.cloneNode(true);
  renderPhoto.querySelector('.picture__img').src = url;
  renderPhoto.querySelector('.picture__likes').textContent = likes;
  renderPhoto.querySelector('.picture__comments').textContent = comments.length;

  photoFragment.appendChild(renderPhoto);
});

photosList.appendChild(photoFragment);
