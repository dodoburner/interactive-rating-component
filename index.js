let numbers= document.querySelectorAll('.number');
let value;


numbers.forEach(number => number.addEventListener('click', e => {
  value= number.textContent;

}));

let submit= document.querySelector('#submit');

