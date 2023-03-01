import {photos} from './generate-photos.js';

const thambnailsList = document.querySelector('.pictures');

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoImg = bigPhoto.querySelector('.big-picture__img img');
const bigPhotoLikes = bigPhoto.querySelector('.likes-count');
const bigPhotoComments = bigPhoto.querySelector('.social__comments');
const bigPhotoCommentsCount = bigPhoto.querySelector('.comments-count');
const bigPhotoDescription = bigPhoto.querySelector('.social__caption');
const bigPhotoCancel = bigPhoto.querySelector('.big-picture__cancel');
const bigPhotoOverlay = document.querySelector('.big-picture.overlay');

function temporaryHiding () {
  bigPhoto.querySelector('.social__comment-count').classList.add('hidden');
  bigPhoto.querySelector('.comments-loader').classList.add('hidden');
}

function getPhoto (target) {
  let num = 1;
  while (!target.closest(`.picture:nth-of-type(${num})`)) {
    num++;
  }
  return photos[--num];
}

function updateComments (photo) {
  const comments = photo.comments;
  const commentsFragment = document.createDocumentFragment();

  comments.forEach((el) => {
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
}

function updateBigPhoto (photo) {
  bigPhotoImg.src = photo.url;
  bigPhotoLikes.textContent = photo.likes;
  bigPhotoCommentsCount.textContent = photo.comments.length;
  bigPhotoDescription.textContent = photo.description;

  updateComments(photo);
}

function closeBigPhoto () {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  thambnailsList.addEventListener('click', onThumbnailClick);
  bigPhotoCancel.removeEventListener('click', onBigPhotoCancelClick);
  bigPhotoOverlay.removeEventListener('click', onBigPhotoOverlayClick);
  document.removeEventListener('keydown', onDocumentEscapeDown);
}

function showBigPhoto (photo) {
  bigPhoto.classList.remove('hidden');
  updateBigPhoto(photo);
  document.body.classList.add('modal-open');
  bigPhotoCancel.addEventListener('click', onBigPhotoCancelClick);
  bigPhotoOverlay.addEventListener('click', onBigPhotoOverlayClick);
  document.addEventListener('keydown', onDocumentEscapeDown);
  thambnailsList.removeEventListener('click', onThumbnailClick);

  temporaryHiding();
}

function onBigPhotoOverlayClick (evt) {
  if (!evt.target.closest('.big-picture__preview')) {
    closeBigPhoto();
  }
}

function onBigPhotoCancelClick () {
  closeBigPhoto();
}

function onDocumentEscapeDown (evt) {
  if (evt.key === 'Escape') {
    closeBigPhoto();
  }
}

function onThumbnailClick (evt) {
  if (evt.target.closest('.picture')) {
    const photo = getPhoto(evt.target);
    showBigPhoto(photo);
  }
}

function renderBigPhoto () {
  thambnailsList.addEventListener('click', onThumbnailClick);
}

export {renderBigPhoto};
