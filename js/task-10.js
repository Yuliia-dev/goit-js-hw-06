const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const containerBoxes = document.querySelector('#boxes');

createBtnEl.addEventListener('click', onCreateBoxes);
destroyBtnEl.addEventListener('click',onDestroyElement);

function onCreateBoxes() {
  containerBoxes.innerHTML = '';
  containerBoxes.append(...fillArray(inputEl.value));
}

function onDestroyElement() {
  containerBoxes.innerHTML = '';
  inputEl.value = '';
}

function fillArray(element) {
  const newArr = [];
  for (let i = 0; i < element; i += 1) {
    const box = document.createElement('div');
    box.style.height = 30 + (i * 10) + 'px';
    box.style.width = 30 + (i * 10) + 'px';
    box.style.backgroundColor = getRandomHexColor();
    newArr.push(box);
  }
  return newArr;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}