const nameElement = document.getElementById("guestName");
const emailElement = document.getElementById("guestEmail");
const messageElement = document.getElementById("guestMessage");
const emptyString = "";

function checkIfExist(mainString, searchString) {
  return mainString.indexOf(searchString) === -1;
}
function isEmptyString(inputString) {
  return inputString === emptyString;
}
function validateContact() {
  // guest name validation
  let guestNameValue = nameElement.value;
  if (isEmptyString(guestNameValue)) {
    nameElement.classList.add("input-empty-error");
    nameElement.required = true;
  }
  // guest email validation
  let guestEmailValue = emailElement.value;
  if (
    isEmptyString(guestEmailValue) ||
    checkIfExist(guestEmailValue, "@") ||
    checkIfExist(guestEmailValue, ".")
  ) {
    emailElement.classList.add("input-empty-error");
    emailElement.required = true;
  }
  // guest message validation
  let guestMessageValue = messageElement.value;
  if (isEmptyString(guestMessageValue)) {
    messageElement.classList.add("input-empty-error");
    messageElement.required = true;
  }
  return true;
}

// onchange listiners
nameElement.onchange = () => {
  checkforErrorOnChange(nameElement);
};

emailElement.onchange = () => {
  checkforErrorOnChange(emailElement);
};

messageElement.onchange = () => {
  checkforErrorOnChange(messageElement);
};

function checkforErrorOnChange(element) {
  if (element.value.trim().length > 0)
    element.classList.remove("input-empty-error");
  else element.classList.add("input-empty-error");
}
