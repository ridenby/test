let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.getElementsByTagName('a');

btn[0].addEventListener('click', function(event) {
    console.log('Кнопочное событие: ' + event.type + ' \n' + event.target + '\n' + event.clientX + ' / ' + event.clientY);
});

wrap.addEventListener('click', function(event) {
    console.log('Оболочное событие: ' + event.type + ' \n' + event.target + '\n' + event.clientX + ' / ' + event.clientY);
});

link[0].addEventListener('click', function(event) {
    console.log('Оболочное событие: ' + event.type + ' \n' + event.target + '\n' + event.clientX + ' / ' + event.clientY);
    event.preventDefault();
});

btn.forEach(function(item) {
    item.addEventListener('touchstart', function(event) {
        console.log('Ты нажал кнопку!');
    });
});

window.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});