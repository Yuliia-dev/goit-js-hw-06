let counterValue = 0;

const refs = {
    count: document.querySelector('#value'),
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
}


refs.increment.addEventListener('click', onButtonAdd);
refs.decrement.addEventListener('click', onButtonRemove);

function onButtonAdd() {
    refs.count.textContent = counterValue += 1; 
}
function onButtonRemove() {
   refs.count.textContent = counterValue -= 1; 
}

