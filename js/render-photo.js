import {photos} from './generate-photos.js';

const thambnails = document.querySelector('.pictures');

const photo = document.querySelector('.big-picture');
const image = photo.querySelector('.big-picture__img img');
const likes = photo.querySelector('.likes-count');
const description = photo.querySelector('.social__caption');
const closeBtn = photo.querySelector('.big-picture__cancel');
const commentsFeed = photo.querySelector('.social__comments');
const commentsLoader = photo.querySelector('.social__comments-loader');
const commentsCountTotal = photo.querySelector('.comments-count-total');
const commentsCountShow = photo.querySelector('.comments-count-show');

/* */

let comments;

function checkCommentsLoader () {
  if (comments.length === 0) {
    commentsLoader.classList.add('hidden');
  }
}

function createComment (data) {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');
  comment.innerHTML =
    `<li class="social__comment">
      <img
      class="social__picture"
      src="${data.avatar}"
      alt="${data.name}"
      width="35" height="35">
      <p class="social__text">${data.message}</p>
    </li>`;
  return comment;
}

function loadComments () {
  const quantity = comments.length < 5 ? comments.length : 5;
  const commentsFragment = document.createDocumentFragment();
  for (let i = 0; i < quantity; i++) {
    commentsFragment.append(createComment(comments[i]));
  }
  commentsFeed.append(commentsFragment);
  commentsCountShow.textContent = +commentsCountShow.textContent + quantity;
  comments = comments.slice(quantity);
  checkCommentsLoader();
}

function updatePhoto (data) {
  image.src = data.url;
  likes.textContent = data.likes;
  description.textContent = data.description;
  comments = data.comments;
  commentsCountTotal.textContent = data.comments.length;
  commentsCountShow.textContent = 0;
  commentsFeed.innerHTML = '';
  loadComments();
}

function onCommentsLoaderClick () {
  loadComments();
}

function onCloseBtnClick () {
  closePhoto();
}

function onDocumentEscapeDown (evt) {
  if (evt.key === 'Escape') {
    closePhoto();
  }
}

function closePhoto () {
  photo.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  closeBtn.removeEventListener('click', onCloseBtnClick);
  document.removeEventListener('keydown', onDocumentEscapeDown);
  thambnails.addEventListener('click', onThumbnailClick);
}

function openPhoto (data) {
  updatePhoto(data);
  photo.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  closeBtn.addEventListener('click', onCloseBtnClick);
  document.addEventListener('keydown', onDocumentEscapeDown);
  thambnails.removeEventListener('click', onThumbnailClick);
}

function getData (target) {
  let thumbnailNum = 1;
  while (!target.closest(`.picture:nth-of-type(${thumbnailNum})`)) {
    thumbnailNum++;
  }
  return photos[--thumbnailNum];
}

function onThumbnailClick (evt) {
  if (evt.target.closest('.picture')) {
    const data = getData(evt.target);
    openPhoto(data);
  }
}

function renderPhoto () {
  thambnails.addEventListener('click', onThumbnailClick);
}

export {renderPhoto};
