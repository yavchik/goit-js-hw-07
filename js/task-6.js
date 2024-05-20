function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const btnElCreate = document.querySelector("button[data-create]");
const btnElDestroy = document.querySelector("button[data-destroy]");
const boxEl = document.querySelector("#boxes");

btnElCreate.addEventListener("click", onBtnClickCreate);
btnElDestroy.addEventListener("click", onBtnClickDestroy);

function onBtnClickCreate() {
  const amount = inputEl.value;

  if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
  inputEl.value = "";
}

function createBoxes(amount) {
  destroyBoxes();

  const box = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    box.push(div);
    size += 10;
  }

  boxEl.append(...box);
}

function onBtnClickDestroy() {
  destroyBoxes();
}

function destroyBoxes() {
  boxEl.innerHTML = "";
}
