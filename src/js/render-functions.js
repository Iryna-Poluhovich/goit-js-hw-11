import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

/**
 * Створює HTML-розмітку галереї і оновлює SimpleLightbox
 * @param {Array} images
 */
export function createGallery(images) {
  const markup = images.map(img => `
    <li class="photo-card">
      <a href="${img.largeImageURL}">
        <div class="thumb">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        </div>
        <div class="info">
          <p><b>Likes</b> ${img.likes}</p>
          <p><b>Views</b> ${img.views}</p>
          <p><b>Comments</b> ${img.comments}</p>
          <p><b>Downloads</b> ${img.downloads}</p>
        </div>
      </a>
    </li>`).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

/**
 * Очищає галерею
 */
export function clearGallery() {
  galleryContainer.innerHTML = '';
}

/**
 * Додає клас для відображення лоадера
 */
export function showLoader() {
  galleryContainer.classList.add('loading');
}

/**
 * Убирає клас, що показує лоадер
 */
export function hideLoader() {
  galleryContainer.classList.remove('loading');
}