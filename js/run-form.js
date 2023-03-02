const form = document.querySelector('.img-upload__form');
const upload = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const formCancer = form.querySelector('.img-upload__cancel');

function openForm () {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  formCancer.addEventListener('click', onformCancerClick);
  document.addEventListener('keydown', onDocumentEscapeDown);
  upload.removeEventListener('change', onUploadClick);
}

function closeForm () {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  upload.addEventListener('change', onUploadClick);
  formCancer.removeEventListener('click', onformCancerClick);
  document.removeEventListener('keydown', onDocumentEscapeDown);
}

function onDocumentEscapeDown () {
  closeForm();
}

function onformCancerClick () {
  closeForm();
}

function onUploadClick () {
  openForm();
}

function runForm () {
  upload.addEventListener('change', onUploadClick);
}

export {runForm};
