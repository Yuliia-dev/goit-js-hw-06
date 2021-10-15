const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
inputEl.addEventListener('input', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length > inputEl.dataset.length) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid')
    }
}

