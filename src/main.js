import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({ title: 'Увага', message: 'Поле пошуку не може бути порожнім.' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const hits = await getImagesByQuery(query);
    hideLoader();

    if (hits.length === 0) {
      iziToast.info({
        title: 'Увага',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(hits);
  } catch (err) {
    hideLoader();
    console.error(err);
    iziToast.error({
      title: 'Помилка',
      message: 'Щось пішло не так. Спробуйте знову пізніше.',
    });
  }
});
