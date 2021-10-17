const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
inputEl.addEventListener('input', onInputBlur);

function onInputBlur(event) {
    const valueLength = event.currentTarget.value.trim().length;
    const inputLength = parseInt(inputEl.dataset.length);
    if (valueLength !== inputLength) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
         inputEl.classList.add('valid');
    }
}

