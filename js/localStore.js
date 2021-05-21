const LOCAL_STORAGE_KEY = "gallery";

function getImageList() {
  let imageList = [];
  if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    imageList = localStorage.getItem(LOCAL_STORAGE_KEY);
    imageList = JSON.parse(imageList);
  }
  return imageList;
}

function addNewImageToStorage(imgObject) {
  let il = getImageList();
  il.push(imgObject);
  updateLocalStorage(il);
}

function deleteImageFromStorage(imgUrl) {
  let list = getImageList();
  list = list.filter((image) => {
    return image.url != imgUrl;
  });
  updateLocalStorage(list);
}

// helper function
function updateLocalStorage(updatedList) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedList));
}

// exports
export default getImageList;
export { addNewImageToStorage, deleteImageFromStorage };
