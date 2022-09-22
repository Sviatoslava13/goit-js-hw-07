import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const elementGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" style = "display: block" />
</a></li>`,
  )
  .join('');
elementGallery.insertAdjacentHTML('afterbegin', markup);
//console.log(markup);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
