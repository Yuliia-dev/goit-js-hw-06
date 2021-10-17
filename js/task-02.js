const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newArr = [];

const ingredientsEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
    const ingredientsItemEl = document.createElement('li');
    ingredientsItemEl.textContent = ingredient;
    ingredientsItemEl.classList.add('item');
    newArr.push(ingredientsItemEl);
  }
);

ingredientsEl.append(...newArr);
