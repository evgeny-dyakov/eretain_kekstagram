import {photos} from './generate-photos.js';

const feed = document.querySelector('.pictures');

const thumbnailTemplate = document.querySelector('#picture').content;
const thumbnail = thumbnailTemplate.querySelector('.picture');

function renderThumbnails () {
  const thumbnailsFragment = document.createDocumentFragment();

  photos.forEach((foto) => {
    const item = thumbnail.cloneNode(true);
    item.querySelector('.picture__img').src = foto.url;
    item.querySelector('.picture__comments').textContent = foto.comments.length;
    item.querySelector('.picture__likes').textContent = foto.likes;

    thumbnailsFragment.appendChild(item);
  });

  feed.appendChild(thumbnailsFragment);
}

export {renderThumbnails};
