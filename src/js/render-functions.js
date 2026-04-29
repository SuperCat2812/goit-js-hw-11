export function onImagesRender({
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
