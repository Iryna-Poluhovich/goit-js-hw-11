import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

/**
 * Створює HTML-розмітку галереї і оновлює SimpleLightbox
 * @param {Array} images
 */
export function createGallery(images) {
  const markup = images
    .map(
      img => `
    <li class="photo-card">
      <a href="${img.largeImageURL}">
        <div class="gallery-image">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        </div>
        <div class="info">
          <p class="info-card"><b>Likes</b> ${img.likes}</p>
          <p class="info-card"><b>Views</b> ${img.views}</p>
          <p class="info-card"><b>Comments</b> ${img.comments}</p>
          <p class="info-card"><b>Downloads</b> ${img.downloads}</p>
        </div>
      </a>
    </li>`
    )
    .join('');

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
