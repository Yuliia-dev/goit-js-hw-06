const formEL = document.querySelector('.login-form');
const inputEl = document.querySelectorAll('input');

formEL.addEventListener('submit', onFormSubmit);
// submitEl.addEventListener('input', onLicenseInput);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElem = event.currentTarget.elements;
    
    const email = formElem.email.value;
    const password = formElem.password.value;

    const formData = {
        email,
        password,
    }
    if (formData.email === '' || formData.password === '' ) {
         return alert('Все поля должны быть заполнены!');    
    }
    console.log(formData);

    formEL.reset(); 
}


    