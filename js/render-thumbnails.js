import {photos} from './generate-photos.js';

const feed = document.querySelector('.pictures');

const thumbnailTemplate = document.querySelector('#picture').content;
const thumbnail = thumbnailTemplate.querySelector('.picture');

function renderThumbnails () {
  const thumbnailsFragment = document.createDocumentFragment();

  photos.forEach((el) => {
    const item = thumbnail.cloneNode(true);
    item.querySelector('.picture__img').src = el.url;
    item.querySelector('.picture__comments').textContent = el.comments.length;
    item.querySelector('.picture__likes').textContent = el.likes;

    thumbnailsFragment.appendChild(item);
  });

  feed.appendChild(thumbnailsFragment);
}

export {renderThumbnails};
