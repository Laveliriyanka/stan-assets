let menuElemOne = document.getElementById('list-1');
let menuElemTwo = document.getElementById('list-2');
let menuElemThree = document.getElementById('list-3');
let menuElemFour = document.getElementById('list-4');
let menuElemFive = document.getElementById('list-5');

let titleElemOne = menuElemOne.querySelector('.questions-content-image');
let titleElemTwo = menuElemTwo.querySelector('.questions-content-image');
let titleElemThree = menuElemThree.querySelector('.questions-content-image');
let titleElemFour = menuElemFour.querySelector('.questions-content-image');
let titleElemFive = menuElemFive.querySelector('.questions-content-image');

titleElemOne.addEventListener('click', function() {
    menuElemOne.classList.toggle('open');
}) 

titleElemTwo.addEventListener('click', function() {
    menuElemTwo.classList.toggle('open');
});

titleElemThree.addEventListener('click', function() {
    menuElemThree.classList.toggle('open');
});

titleElemFour.addEventListener('click', function() {
    menuElemFour.classList.toggle('open');
});

titleElemFive.addEventListener('click', function() {
    menuElemFive.classList.toggle('open');
});











