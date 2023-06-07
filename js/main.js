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

titleElemOne.onclick = function() {
    menuElemOne.classList.toggle('open');
};

titleElemTwo.onclick = function() {
    menuElemTwo.classList.toggle('open');
};

titleElemThree.onclick = function() {
    menuElemThree.classList.toggle('open');
};

titleElemFour.onclick = function() {
    menuElemFour.classList.toggle('open');
};

titleElemFive.onclick = function() {
    menuElemFive.classList.toggle('open');
};










