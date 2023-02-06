import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const images = galleryItems.map(({ preview, original, description }) => {

    // const imageItem = document.createElement("div");
    // imageItem.className = "gallery__item";
    // const imageLink = document.createElement("a");
    // imageLink.className = "gallery__link";
    // imageLink.href = original;

    // const image = document.createElement("img");
    // image.className = "gallery__image";
    // image.src = preview;
    // image.data_source = original;
    // image.alt = description;
    // imageLink.append(image);
    // imageItem.append(imageLink);
        const imageItem = `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${original}"
          data-source="${original}" 
          alt="${description}"
        />
      </a>
    </div>`;
    return imageItem;
}
    
).join("");

// gallery.append(...images);
gallery.innerHTML = images;


gallery.addEventListener("click", selectImg);

function selectImg(event) { 

  if (event.target.nodeName !== "IMG") {
      return;
  }
    event.target.src = event.target.data-source; 
    const selectedImg = event.target.src;
    basicLightbox.create(`
        <img width="1280" height="871" src="${selectedImg}">
    `).show()
} 

