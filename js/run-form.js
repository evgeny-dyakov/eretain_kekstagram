const form = document.querySelector('.img-upload__form');
const upload = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const formCancel = form.querySelector('.img-upload__cancel');
const hashtags = form.querySelector('.text__hashtags');
const description = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form-error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text-help'
});

function getUserHashtags (value) {
  const userHashtags = [];
  value.split(' ').forEach((el) => {
    if (el !== '' && el !== '#') {
      userHashtags.push(el);
    }
  });
  return userHashtags;
}

pristine.addValidator(hashtags, (value) => {
  const userHashtags = getUserHashtags(value);
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  for (let i = 0; i < userHashtags.length; i++) {
    if (!re.test(userHashtags[i])) {
      return false;
    }
  }
  return true;
}, 'начинается с #, без спецсимволов, не более 20 знаков', 3, true);

pristine.addValidator(hashtags, (value) => {
  const userHashtags = getUserHashtags(value);
  for (let i = 0; i < userHashtags.length - 1; i++) {
    for (let j = i + 1; j < userHashtags.length; j++) {
      if (userHashtags[i].toLowerCase() === userHashtags[j].toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}, 'хэштег не может быть использован дважды', 2, true);

pristine.addValidator(hashtags, (value) => {
  const userHashtags = getUserHashtags(value);
  if (userHashtags.length > 5) {
    return false;
  }
  return true;
}, 'не больше 5', 1, true);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    alert('валидно');
  } else {
    alert('не валидно');
  }
});

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
