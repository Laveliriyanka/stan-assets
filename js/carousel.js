let i = 1;
for(let li of carousel.querySelectorAll('.gallery-card')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0"></span>`);
    i++;
}

/* конфигурация */
let width = 400; // ширина картинки
let count = 3; // видимое количество изображений
let list = carousel.querySelector('.gallery-cards');
let listElems = carousel.querySelectorAll('.gallery-card');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').addEventListener('click',function() {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
}) 

carousel.querySelector('.next').addEventListener('click', function() {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
}); 