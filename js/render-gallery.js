import {generatePhotosData} from './generate-photos-data.js';
import {renderThumbnails} from './render-thumbnails.js';
import {renderFullSizePhoto} from './render-full-size-photo.js';

const renderGallery = () => {
  const photosData = generatePhotosData();
  renderThumbnails(photosData);
  const thumbnails = document.querySelectorAll('.picture');
  renderFullSizePhoto(thumbnails, photosData);
};

export {renderGallery};
