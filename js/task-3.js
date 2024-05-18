const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", onInputChange);

function onInputChange() {
  const deleteSpaces = inputElem.value.trim();
  outputElem.textContent = deleteSpaces === "" ? "Anonymous" : deleteSpaces;
}
