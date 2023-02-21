const feed = document.querySelector('.pictures');

const thumbnailTemplate = document.querySelector('#picture').content;
const thumbnail = thumbnailTemplate.querySelector('.picture');

const showThumbnails = (fotos) => {
  const thumbnailsFragment = document.createDocumentFragment();

  fotos.forEach((el) => {
    const item = thumbnail.cloneNode(true);
    item.querySelector('.picture__img').src = el.url;
    item.querySelector('.picture__comments').textContent = el.comments.length;
    item.querySelector('.picture__likes').textContent = el.likes;

    thumbnailsFragment.appendChild(item);
  });

  feed.appendChild(thumbnailsFragment);
};

export {showThumbnails};
