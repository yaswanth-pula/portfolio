import getAllImages, { deleteImageFromStorage } from "./localStore.js";

// get image container element
const galleryContent = document.getElementById("img-content-container");

// load the images on start
loadImages(getAllImages());

function loadImages(imageCollection) {
  // make container empty
  galleryContent.innerHTML = "";

  if (imageCollection.length == 0) {
    showDefaultImages();
  }
  // fill the container with images
  imageCollection.map((image) => {
    createNewImageElement(image.url);
  });
}

function createNewImageElement(imageUrl) {
  const div = document.createElement("div");
  div.classList.add("img-content");

  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;

  div.appendChild(imageElement);
  galleryContent.appendChild(div);
}

function showDefaultImages() {
  fetch("../static/default-images.json")
    .then((res) => res.json())
    .then((data) => {
      loadImages(data.images);
    });
}
