'use strict';

let tenzor = document.querySelectorAll('.circle'),
    box = document.querySelectorAll('.box'),
    wrapper = document.querySelector('.wrapper');

// tenzor.forEach((item, index, arr) => {
//     item.style.backgroundColor = 'pink';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Тут был и я');

div.textContent = 'Privet <p></p>Mir';
div.classList.add('black');

document.body.insertBefore(div, tenzor[0]);

console.log(div);