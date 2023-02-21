import {photos} from './get-photos.js';
import {showThumbnails} from './show-thumbnails.js';
import {showBigPhoto} from './show-big-photo.js';

const renderGallery = () => {
  showThumbnails(photos);

  const thumbnails = document.querySelectorAll('.picture');
  showBigPhoto(thumbnails);
};

export {renderGallery};

/*
что если переименовать:
  get-photos в generate-data
  show-thumbnails в render-thumbnails
  show-big-photo в render-full-size-photo
  gallery в render-gallery
*/
