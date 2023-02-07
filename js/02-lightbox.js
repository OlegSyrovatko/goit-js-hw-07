import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const images = galleryItems.map(({ preview, original, description }) => {

    const imageItem = `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" title="${description}" />
    </a>`;
    return imageItem;
}).join("");


gallery.innerHTML = images;

// let galler = $('.gallery a').simpleLightbox();
// galler.on('show.simplelightbox', function () {
//     // do something…
//     console.log(1);
// });


// let galler = new SimpleLightbox('.gallery a');
// galler.on('show.simplelightbox', function () {
//     // do something…
// });


var lightbox = new SimpleLightbox('.gallery a', { captions: true });