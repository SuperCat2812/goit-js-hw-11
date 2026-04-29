import iziToast from 'izitoast';
import { getImage } from './js/pixabay-api';
import { onImagesRender } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('input[name="search-text"]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};
const large = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
refs.form.addEventListener('submit', onSearchFormImages);
function onSearchFormImages(e) {
  e.preventDefault();
  let name = refs.input.value.trim();
  refs.loader.classList.add('is-active');
  refs.gallery.innerHTML = '';
  const image = getImage(name)
    .then(({ data: imageData }) => {
      if (imageData.total === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      refs.gallery.innerHTML = imageData.hits.map(image => onImagesRender(image)).join('');
      large.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => refs.loader.classList.remove('is-active'));
}
