function validate() {
  const nameElement = document.getElementById("guestName");
  const emailElement = document.getElementById("guestEmail");
  const messageElement = document.getElementById("guestMessage");

  const emptyString = "";
  // guest name validation
  let guestNameValue = nameElement.value;
  if (guestNameValue === emptyString) {
    nameElement.classList.add("input-empty-error");
    nameElement.required = true;
  } else {
    nameElement.classList.remove("input-empty-error");
  }
  // guest email validation
  let guestEmailValue = emailElement.value;
  if (
    guestEmailValue === emptyString ||
    guestEmailValue.indexOf("@") === -1 ||
    guestEmailValue.indexOf(".") === -1
  ) {
    emailElement.classList.add("input-empty-error");
    emailElement.required = true;
  } else {
    emailElement.classList.remove("input-empty-error");
  }
  // guest message validation
  let guestMessageValue = messageElement.value;
  if (guestMessageValue === emptyString) {
    messageElement.classList.add("input-empty-error");
    messageElement.required = true;
  } else {
    messageElement.classList.remove("input-empty-error");
  }
  return true;
}
