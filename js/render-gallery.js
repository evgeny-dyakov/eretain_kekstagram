// import {photosData} from './generate-photos-data.js';
import {generatePhotosData} from './generate-photos-data.js';
import {renderThumbnails} from './render-thumbnails.js';
import {renderFullSizePhoto} from './render-full-size-photo.js';

const renderGallery = () => {
  renderThumbnails(generatePhotosData(25));
  renderFullSizePhoto(document.querySelectorAll('.picture'));
};

export {renderGallery};
