const categoriesLengthAllEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesLengthAllEl.children.length}`);

const categoryListEl = document.querySelectorAll('.item');
categoryListEl.forEach((elem) => {
    const categoryNameEl = elem.querySelector('h2').textContent;
    const categoryLengthEl = elem.querySelectorAll('li').length 

    console.log(`Category: ${categoryNameEl}`)
    console.log(`Elements: ${categoryLengthEl}`);
});





