
const sizeControlEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

sizeControlEl.addEventListener('input', onRangeChange);

function onRangeChange () {    
textEl.style.fontSize = document.getElementById('font-size-control').value + 'px';
}