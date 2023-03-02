const form = document.querySelector('.img-upload__form');
const upload = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const formCancel = form.querySelector('.img-upload__cancel');
const hashtags = form.querySelector('.text__hashtags');
const description = form.querySelector('.text__description');

function openForm () {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  formCancel.addEventListener('click', onFormCancelClick);
  document.addEventListener('keydown', onDocumentEscapeDown);
  hashtags.addEventListener('keydown', onFormFieldEscapeDown);
  description.addEventListener('keydown', onFormFieldEscapeDown);
  upload.removeEventListener('change', onUploadClick);
}

function closeForm () {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  upload.addEventListener('change', onUploadClick);
  formCancel.removeEventListener('click', onFormCancelClick);
  document.removeEventListener('keydown', onDocumentEscapeDown);
  hashtags.removeEventListener('keydown', onFormFieldEscapeDown);
  description.removeEventListener('keydown', onFormFieldEscapeDown);
  clearFields();
}

function clearFields () {
  upload.value = null;
  hashtags.value = null;
  description.value = null;
}

function onFormFieldEscapeDown (evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
}

function onDocumentEscapeDown (evt) {
  if (evt.key === 'Escape') {
    closeForm();
  }
}

function onFormCancelClick () {
  closeForm();
}

function onUploadClick () {
  openForm();
}

function runForm () {
  upload.addEventListener('change', onUploadClick);
}

export {runForm};
