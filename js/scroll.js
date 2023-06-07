
let footerButton = document.getElementById('footer-button')
let headerAction = document.getElementById('header-section')

footerButton.onclick = function() {
    headerAction.scrollIntoView({block: "start", behavior: "smooth"});
}

let servicesAction = document.getElementById('services-action');
let technologiesAction = document.getElementById('technologies-action');
let productsAction= document.getElementById('products-action');
let portfolioAction = document.getElementById('portfolio-action');
let contactsAction = document.getElementById('contacts-action');
let aboutUsAction = document.getElementById('about-us-action');

let technologies = document.getElementById('technologies');
let cards = document.getElementById('cards');
let services = document.getElementById('services');
let contacts = document.getElementById('contacts');
let progects = document.getElementById('progects');
let questions = document.getElementById('questions');

servicesAction.onclick = function() {
    services.scrollIntoView({block: "start", behavior: "smooth"});
}
technologiesAction.onclick = function() {
    technologies.scrollIntoView({block: "start", behavior: "smooth"});
}
productsAction.onclick = function() {
    cards.scrollIntoView({block: "start", behavior: "smooth"});
}
portfolioAction.onclick = function() {
    progects.scrollIntoView({block: "start", behavior: "smooth"});
}
contactsAction.onclick = function() {
    contacts.scrollIntoView({block: "start", behavior: "smooth"});
}
aboutUsAction.onclick = function() {
    questions.scrollIntoView({block: "start", behavior: "smooth"});
}