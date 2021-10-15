let counterValue = 0;

const refs = {
    count: document.querySelector('#value'),
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
}

refs.count.textContent = counterValue;

refs.increment.addEventListener('click', onButtonAdd);
refs.decrement.addEventListener('click', onButtonRemove);

function onButtonAdd() {
    counterValue += 1
    refs.count.textContent = counterValue; 
}
function onButtonRemove() {
    counterValue -= 1
   refs.count.textContent = counterValue; 
}

