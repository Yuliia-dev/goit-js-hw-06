const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsEl = document.querySelector('#ingredients');

const newArr = ingredients.map(ingredient => {
    const ingredientsItemEl = document.createElement('li');
    ingredientsItemEl.textContent = ingredient;
    ingredientsItemEl.classList.add('item');
    return ingredientsItemEl;
  }
);

ingredientsEl.append(...newArr);
