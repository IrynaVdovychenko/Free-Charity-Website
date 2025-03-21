"use strict"


$(document).ready(function() {
    $('.slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:false,
        waitForAnimate:false,
    });
});

/* -----------------Меню Бургер---------------------- */

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function(event) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};

/* -----------------Меню Бургер---------------------- */

/* ---------------Прокрутка до розділу--------------- */

const menuLinks = document.querySelectorAll('.menu__item[data-goto]');
if (menuLinks.length >0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function (e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
                
                //Закриття меню Бургер
                if(iconMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    menuBody.classList.remove('_active');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        });
    });
};

/* ---------------Прокрутка до розділу--------------- */