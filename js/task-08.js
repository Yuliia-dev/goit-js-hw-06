const formEL = document.querySelector('.login-form');

formEL.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    
    const formElem = event.currentTarget.elements;
    
    const email = formElem.email.value;
    const password = formElem.password.value;

    if (email === '' || password === '' ) {
         return alert('Все поля должны быть заполнены!');    
    }
    const formData = {
        email,
        password,
    }
    console.log(formData);

    formEL.reset(); 
}


    