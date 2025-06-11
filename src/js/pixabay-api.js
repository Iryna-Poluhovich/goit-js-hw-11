import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50805377-c760a6bd689a5892724b0890e'; 

/**
 * Виконує запит до Pixabay API і повертає масив зображень (data.hits)
 * @param {string} query
 * @returns {Promise<Array>}
 */
export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data.hits;
}
