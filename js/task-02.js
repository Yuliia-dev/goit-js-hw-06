const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach(ingredient => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.textContent = ingredient;
  ingredientsItemEl.classList.add('item');
 
  const ingredientsEl = document.querySelector('#ingredients');
  ingredientsEl.appendChild(ingredientsItemEl);
}
);


