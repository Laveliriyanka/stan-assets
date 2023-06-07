let point1 = document.getElementById('point1');
let point2 = document.getElementById('point2');
let point3 = document.getElementById('point3');

let contentMenuOne = document.getElementById('content-menu-1');
let contentMenuTwo = document.getElementById('content-menu-2');
let contentMenuThree = document.getElementById('content-menu-3');

let pointOne = point1.querySelector('.point');
let pointTwo = point2.querySelector('.point');
let pointThree = point3.querySelector('.point');

point1.classList.add('point-action');
contentMenuOne.classList.add('open');

pointOne.onclick = function() {
    point1.classList.add('point-action');
    point2.classList.remove('point-action');
    point3.classList.remove('point-action');

    contentMenuOne.classList.add('open');
    contentMenuTwo.classList.remove('open');
    contentMenuThree.classList.remove('open');
}

pointTwo.onclick = function() {
    point1.classList.remove('point-action');
    point2.classList.add('point-action');
    point3.classList.remove('point-action');

    contentMenuOne.classList.remove('open');
    contentMenuTwo.classList.add('open');
    contentMenuThree.classList.remove('open');
}

pointThree.onclick = function() {
    point1.classList.remove('point-action');
    point2.classList.remove('point-action');
    point3.classList.add('point-action');

    contentMenuOne.classList.remove('open');
    contentMenuTwo.classList.remove('open');
    contentMenuThree.classList.add('open');
}