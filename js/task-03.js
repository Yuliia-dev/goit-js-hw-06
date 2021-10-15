const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const itemImg = images.map(({url, alt}) => {
  return `
  <li class="img__item">
  <img class="photo" src=${url} alt=${alt}>
  </li>
  `;
})
  .join('');

const imgListEl = document.querySelector('.gallery');
  
imgListEl.insertAdjacentHTML('beforeend', itemImg);





// const itemImg = images.map(image => {
//   const imgItemEl = document.createElement('li');
    
//   const imgRef = document.createElement('img');
//   imgRef.src = image.url;
//   imgRef.alt = image.alt;
//   imgRef.width = 320;
//   imgRef.height = 200;

//   imgItemEl.style.listStyle = 'none';
    
//   imgItemEl.appendChild(imgRef);
//   return imgItemEl;

// });

//  const imgListEl = document.querySelector('.gallery');
//   imgListEl.style.display = 'flex';
//   imgListEl.style.justifyContent = 'space-evenly';
//   imgListEl.append(...itemImg);



  

  
