import SimpleLightbox from 'simplelightbox';
import { refs } from '../main';

const large = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
export function ImagesRender({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `  <li class="gallery-item">
  <a href="${largeImageURL}">
        <img src="${webformatURL}"alt="${tags}"></a>
        <div class="info">
          <div class=content>
            <p class="name">Likes</p>
            <p>${likes}</p>
          </div class=content>
          <div class=content>
            <p class="name">Views</p>
            <p>${views}</p>
          </div>
          <div class=content>
            <p class="name">Comments</p>
            <p>${comments}</p>
          </div>
          <div class=content>
            <p class="name">Downloads</p>
            <p>${downloads}</p>
          </div>
        </div>
      </li>`;
}
export function onImagesRender(i) {
  return (refs.gallery.innerHTML = i);
}
export function onImagesRenderLarge() {
  large.refresh();
}

export function onLouder() {
  return refs.loader.classList.add('is-active');
}

export function offLouder() {
  return refs.loader.classList.remove('is-active');
}

export function onImagesRenderClear() {
  return (refs.gallery.innerHTML = '');
}
