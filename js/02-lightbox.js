import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const images = galleryItems.map(({ preview, original, description }) => {

    const imageItem = `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    return imageItem;
}).join("");


gallery.innerHTML = images;


new SimpleLightbox('.gallery a', { captions: true, captionDelay:250, captionsData: "alt" });



