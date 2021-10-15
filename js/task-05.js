
const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputLicense);
nameEl.addEventListener('input', onInputLicense);

function onInputLicense (event) {
    nameEl.textContent = event.currentTarget.value;
    
    if (nameEl.textContent === "") {
        nameEl.textContent = 'Anonymous';
    } 
}



