import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const images = galleryItems.map(({ preview, original, description }) => {

    const imageItem = document.createElement("div");
    imageItem.className = "gallery__item";
    const imageLink = document.createElement("a");
    imageItem.className = "gallery__link";

    const image = document.createElement("img");
    image.src = preview;
    image.alt = description;
    image.className = "gallery__image";

    imageLink.append(image);
    imageItem.append(imageLink);

    return imageItem;
 }
);
gallery.append(...images);



