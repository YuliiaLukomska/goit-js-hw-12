// Імпорти
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from './img/left-close.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

// Лайтбокс
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// DOM-elements
const refs = {
  form: document.querySelector('form'),
  button: document.querySelector('button'),
  list: document.querySelector('ul'),
  loader: document.querySelector('span'),
  loadbtn: document.querySelector('.btn-load-more'),
};

// Константи та змінні
const API_KEY = '41896397-c8b989416d0fb53fd1030eb96';
const BASE_URL = 'https://pixabay.com/api/';
let page = 1;
let inputValue = '';
let maxPage = 0;
let isHidden;

// вішаємо слухач на кнопку пошуку зображень
refs.form.addEventListener('submit', onSearchImage);

// функція, яка виконується при submit (отримуємо дані з серверу в try catch і рендеримо розмітку за цими даними,
// додаємо кнопку Load More якщо на сторінці більше,ніж 1 картинка. На кнопку вішаємо слухач по кліку)
async function onSearchImage(event) {
  event.preventDefault();
  hideAndShowLoadMoreBtn((isHidden = true));
  page = 1;
  refs.loader.classList.add('loader');
  refs.list.innerHTML = '';
  const form = event.currentTarget;
  inputValue = form.elements.image.value.trim();
  if (!inputValue) {
    return;
  }
  try {
    const data = await fetchOnImage(inputValue);
    maxPage = Math.ceil(data.totalHits / 40);
    createGaleryMarkup(data);
    refs.loader.classList.remove('loader');

    if (data.hits.length > 0 && data.hits.length !== data.totalHits) {
      hideAndShowLoadMoreBtn((isHidden = false));
      refs.loadbtn.addEventListener('click', onLoadMoreImages);
    } else {
      hideAndShowLoadMoreBtn((isHidden = true));
    }
    lightbox.refresh();
    if (data.hits.length === 0) {
      createIziToastError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
  } catch (error) {
    createIziToastError('Error');
  } finally {
    form.reset();
  }
}
// тут робимо get-запит на сервер
async function fetchOnImage(inputValue, page = 1) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 40,
      page: page,
    },
  });
  return response.data;
}
// функція, яка викликається при кліку на кнопку Load More
async function onLoadMoreImages() {
  page += 1;
  scrollPage();
  refs.loader.classList.add('loader');
  try {
    const data = await fetchOnImage(inputValue, page);
    createGaleryMarkup(data);
    refs.loader.classList.remove('loader');
    lightbox.refresh();
  } catch (error) {
    createIziToastError('Error');
  } finally {
    if (page === maxPage) {
      hideAndShowLoadMoreBtn((isHidden = true));
      refs.loadbtn.removeEventListener('click', onLoadMoreImages);
      createIziToastError(
        'We are sorry, but you have reached the end of search results.'
      );
    }
  }
}

// Функція, яка рендерить розмітку
function createGaleryMarkup(data) {
  const markup = data.hits
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
  refs.list.insertAdjacentHTML('beforeend', markup);
}
// функція, яка додає плавний скрол на 2 висоти картинки
function scrollPage() {
  const imageItemRef = document.querySelector('.gallery-item');
  const imageHeight = imageItemRef.getBoundingClientRect().height;
  const doubleHeight = imageHeight * 2;

  window.scrollBy({
    top: doubleHeight,
    behavior: 'smooth',
  });
}

// Функція, яка ховає або показує кнопку Load More
function hideAndShowLoadMoreBtn(isHidden) {
  if (isHidden) {
    refs.loadbtn.classList.add('is-hidden');
  } else {
    refs.loadbtn.classList.remove('is-hidden');
  }
}

// Функція, яка створює сповіщення помилки за доп. iziToast
function createIziToastError(notification) {
  iziToast.error({
    message: notification,
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
