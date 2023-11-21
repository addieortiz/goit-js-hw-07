import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const createGallery = (element) => {
  return element
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
};

const photosList = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", photosList);

console.log(galleryItems);

// const click

// new SimpleLightbox('.gallery a', { /* options */ });

// new SimpleLightbox('.gallery a', { /captionDelay });

// var gallery = $('.gallery a').simpleLightbox();

// gallery.next(); // Next Image
