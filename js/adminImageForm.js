import { addNewImageToStorage } from "./localStore.js";

// get elements
const urlInputElement = document.getElementById("freshImageUrl");
const nameInputElement = document.getElementById("freshImageName");
const uploadDateElement = document.getElementById("uploadDate");
const fileInputElement = document.getElementById("image-local");

// get corresponding values

function putNewImage(imageUrl) {
  const nameInputElementValue = nameInputElement.value;
  const uploadDateElementValue = uploadDateElement.value;
  const freshImage = {
    info: "Some thing",
    name: nameInputElementValue,
    uploadedDate: uploadDateElementValue,
    url: imageUrl,
  };
  addNewImageToStorage(freshImage);
}

const button = document.getElementById("save-image");
button.addEventListener("click", () => {
  let webUrl = urlInputElement.value;
  if (webUrl !== "") putNewImage(webUrl);
  else {
    const reader = new FileReader();
    reader.readAsDataURL(fileInputElement.files[0]);
    reader.addEventListener("load", () => {
      let img = reader.result;
      putNewImage(img);
    });
  }
});

fileInputElement.addEventListener("change", () => {
  // const reader = new FileReader();
  // reader.readAsDataURL(fileInputElement.files[0]);
  // reader.addEventListener("load", () => {
  //   putNewImage(reader.result);
  // });
});
