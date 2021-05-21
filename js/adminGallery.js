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
    return;
  }
  // fill the container with images
  imageCollection.map((image) => {
    createNewImageElement(image.url);
  });
}

function onImageDelete(imageUrl) {
  deleteImageFromStorage(imageUrl);
  loadImages(getAllImages());
}

function createNewImageElement(imageUrl) {
  const div = document.createElement("div");
  div.classList.add("pic-container");

  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;

  const backDiv = document.createElement("div");
  backDiv.classList.add("overlay");

  const deleteDiv = document.createElement("div");
  deleteDiv.classList.add("delete-btn");

  const deleteButton = document.createElement("input");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "Delete");
  deleteButton.addEventListener("click", () => {
    if (confirm("Are You Sure to Delete ?")) onImageDelete(imageUrl);
  });

  deleteDiv.appendChild(deleteButton);

  const viewDiv = document.createElement("div");
  viewDiv.classList.add("view-btn");

  const viewButton = document.createElement("a");
  viewButton.setAttribute("href", imageUrl);
  viewButton.setAttribute("target", "_blank");
  viewButton.innerHTML = "view";
  // viewButton.addEventListener("click", () => {
  //   let img = new Image("100%", "100%");
  //   img.src = imageUrl;
  //   document.innerHTML = "";
  //   document.getElementById("root").style.backgroundImage(img);
  // });

  viewDiv.appendChild(viewButton);

  div.appendChild(imageElement);
  div.appendChild(backDiv);
  div.appendChild(viewDiv);
  div.appendChild(deleteDiv);

  galleryContent.appendChild(div);
}

function showDefaultImages() {
  fetch("../static/default-images.json")
    .then((res) => res.json())
    .then((data) => {
      loadImages(data.images);
    });
}
