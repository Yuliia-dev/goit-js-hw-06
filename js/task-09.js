function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
}


const colorNameEl = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', onChangeColor);
btnChangeColor.addEventListener('click', getRandomHexColor);

function onChangeColor(event) {
  const bodyEl = document.querySelector('body');
  bodyEl.classList.add('color');
  const colorBody = document.querySelector('.color');

  if (event) {  
    colorBody.style.backgroundColor = getRandomHexColor();
  }
  colorNameEl.textContent = getRandomHexColor();
  
}

