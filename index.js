let numbers= document.querySelectorAll('.number');
let value;

numbers.forEach(number => number.addEventListener('click', e => {
  numbers.forEach(number => {
    number.removeAttribute('id')});
  value= number.textContent;
  number.setAttribute('id', 'value-selected')
}));

let submit= document.querySelector('#submit');
let boxOne= document.querySelector('#box1');

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};

submit.addEventListener('click', e => {
  if (value == undefined) {
  } else {
      removeAllChildNodes(boxOne);
  
      let thankYouImg= document.createElement('img');
      thankYouImg.setAttribute('id', 'thank-you-img');
      thankYouImg.src="images/illustration-thank-you.svg";

      let numberValue= document.createElement('p');
      numberValue.textContent='You selected ' + value + ' out of 5'
      numberValue.setAttribute('id', 'selected');

      let thankYou= document.createElement('p');
      thankYou.textContent= 'Thank you!'
      thankYou.setAttribute('id', 'thank-you');

      let thankYouDesc= document.createElement('p');
      thankYouDesc.setAttribute('id', 'thank-you-description');
      thankYouDesc.textContent= 'We appreciate you taking the time to give a rating. If you ever need more support, don\'t hesitate to get in touch!'

      boxOne.appendChild(thankYouImg);
      boxOne.appendChild(numberValue);
      boxOne.appendChild(thankYou);
      boxOne.appendChild(thankYouDesc);
      boxOne.setAttribute('id', 'box2')
  }
  

})

