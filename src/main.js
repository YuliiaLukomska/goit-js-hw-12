import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from './img/left-close.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const refs = {
  form: document.querySelector('form'),
  button: document.querySelector('button'),
  list: document.querySelector('ul'),
  loader: document.querySelector('span'),
};
const API_KEY = '41896397-c8b989416d0fb53fd1030eb96';
const BASE_URL = 'https://pixabay.com/api/';

refs.form.addEventListener('submit', onSearchImage);

async function onSearchImage(event) {
  event.preventDefault();
  refs.loader.classList.add('loader');
  refs.list.innerHTML = '';
  const form = event.currentTarget;
  const inputValue = form.elements.image.value;
  try {
    const data = await fetchOnImage(inputValue);
    refs.loader.classList.remove('loader');
    refs.list.innerHTML = createGaleryMarkup(data);
    lightbox.refresh();
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FAFAFB',
        messageLineHeight: '24px',
        messageSize: '16px',
        position: 'topRight',
        iconUrl: icon,
        backgroundColor: '#EF4040',
        maxWidth: '350px',
        timeout: false,
      });
    }
  } catch (error) {
    error =>
      iziToast.error({
        message: 'Error',
        messageColor: '#FAFAFB',
        messageLineHeight: '24px',
        messageSize: '16px',
        position: 'topRight',
        iconUrl: icon,
        backgroundColor: '#EF4040',
        maxWidth: '350px',
        timeout: false,
      });
  } finally {
    () => {
      form.reset();
    };
  }
}

async function fetchOnImage(inputValue) {
  const urlParam = new URLSearchParams({
    key: API_KEY,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const response = await fetch(`${BASE_URL}?${urlParam}`);
  return response.json();
}

function createGaleryMarkup(data) {
  return data.hits
    .map(
      img => `<li class="gallery-item">
          <a class="gallery-link" href="${img.largeImageURL}"
            ><img class="gallery-img" src="${img.webformatURL}" data-sourse="${img.largeImageURL}" alt="${img.tags}"
          /></a>
          <div class="description-wrapper">
            <div class="value-wrapper">
              <p class="label"><b>Likes</b></p>
              <p class="value">${img.likes}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Views</b></p>
              <p class="value">${img.views}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Comments</b></p>
              <p class="value">${img.comments}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Downloads</b></p>
              <p class="value">${img.downloads}</p>
            </div>
          </div>
        </li>`
    )
    .join('');
}
