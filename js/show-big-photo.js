import {photos} from './get-photos.js';

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoImg = bigPhoto.querySelector('.big-picture__img img');
const bigPhotoLikes = bigPhoto.querySelector('.likes-count');
const bigPhotoComments = bigPhoto.querySelector('.social__comments');
const bigPhotoCommentsCount = bigPhoto.querySelector('.comments-count');
const bigPhotoDescription = bigPhoto.querySelector('.social__caption');
const bigPhotoCancel = bigPhoto.querySelector('.big-picture__cancel');

const temporaryHiding = () => {
  bigPhoto.querySelector('.social__comment-count').classList.add('hidden');
  bigPhoto.querySelector('.comments-loader').classList.add('hidden');
};

const addBigPhotoCancelHandlers = () => {
  bigPhotoCancel.addEventListener('click', () => {
    bigPhoto.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  document.body.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      bigPhoto.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
};

const updateComments = (index) => {
  const commentsData = photos[index].comments;
  const commentsFragment = document.createDocumentFragment();

  commentsData.forEach((el) => {
    const newComment = document.createElement('li');
    newComment.classList.add('social__comment');
    newComment.innerHTML =
      `<li class="social__comment">
        <img
        class="social__picture"
        src="${el.avatar}"
        alt="${el.name}"
        width="35" height="35">
        <p class="social__text">${el.message}</p>
      </li>`;
    commentsFragment.appendChild(newComment);
  });

  bigPhotoComments.innerHTML = '';
  bigPhotoComments.appendChild(commentsFragment);
};

const updateBigPhoto = (index) => {
  bigPhotoImg.src = photos[index].url;
  bigPhotoLikes.textContent = photos[index].likes;
  bigPhotoCommentsCount.textContent = photos[index].comments.length;
  bigPhotoDescription.textContent = photos[index].description;

  updateComments(index);
};

const addThumbnailClickHandler = (thumbnail, thumbnailIndex) => {
  thumbnail.addEventListener('click', () => {
    bigPhoto.classList.remove('hidden');
    updateBigPhoto(thumbnailIndex);
    document.body.classList.add('modal-open');
    addBigPhotoCancelHandlers();

    temporaryHiding();
  });
};

const showBigPhoto = (thumbnails) => {
  for (let i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], i);
  }
};

export {showBigPhoto};
