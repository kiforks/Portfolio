var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__button');
var formButton = document.querySelector('.form-buttons__button');
var modals = document.querySelector('.modals');
var modalTrue = document.querySelector('.modals__wrapper--true');
var modalFalse = document.querySelector('.modals__wrapper--false');
var modalsButtonTrue = document.querySelector('.modals__button--true');
var modalsButtonFalse = document.querySelector('.modals__button--false');

document.documentElement.classList.replace('no-js', 'js');

// document.body.contentEditable = true;

navMain.classList.replace('nav--opened', 'nav--closed');

navToggle.addEventListener('click', function () {
    if(navMain.classList.contains('nav--closed')){
        navMain.classList.remove('nav--closed');
        navMain.classList.add('nav--opened');
    } else{
        navMain.classList.add('nav--closed');
        navMain.classList.remove('nav--opened');
    }
});


formButton.addEventListener('click', function (event) {
    event.preventDefault();
    modals.classList.add("modals-show");
});

modalsButtonTrue.addEventListener('click', function (event) {
    event.preventDefault();
    modals.classList.remove("modals-show");
});

modalsButtonFalse.addEventListener('click', function (event) {
    event.preventDefault();
    modals.classList.remove("modals-show");
});


