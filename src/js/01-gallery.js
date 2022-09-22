import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const divElementGallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
  )
  .join('');
divElementGallery.insertAdjacentHTML('afterbegin', markup);
//console.log(markup);

divElementGallery.addEventListener('click', produceGallery);

function produceGallery(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const bigPicture = e.target.getAttribute('data-source');

  const instance = basicLightbox.create(
    `<img src=" ${bigPicture} " width="800" height="600">`,
  );
  instance.show();

  divElementGallery.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}
