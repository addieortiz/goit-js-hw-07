import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const createGallery = (element) => {
  return element
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li >`;
    })
    .join("");
};

const photosList = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", photosList);

console.log(galleryItems);

const clickGallery = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${originalUrl}">`);

  instance.show();

  const clickEscape = (event) => {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", clickEscape);
    }
  };

  window.addEventListener("keydown", clickEscape);
};

galleryList.addEventListener("click", clickGallery);
