// Кнопка меню-бургера
const menuIcon = document.querySelector('.header__menu-icon');
// Меню body
const menuBody = document.querySelector('.header__menu-body');
// Тег body 
const bodyLock = document.querySelector('body');


// Событие при клике на меню-бургер
menuIcon.addEventListener('click', function() {

    // Добавляем класс "active" для menuIcon при клике на бургер меню
    menuIcon.classList.toggle('active');
    // Добавляем класс "active" для menuBody при клике на бургер меню
    menuBody.classList.toggle('active');

    // Добавляем класс "lock" к тегу body при клике на бургер меню (Чтобы убрать скролл)
    bodyLock.classList.toggle('lock');


    // Удаляем все добавленные классы
    const menuLinks = document.querySelectorAll('a');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', function() {
                menuIcon.classList.remove('active');
                menuBody.classList.remove('active');
                bodyLock.classList.remove('lock');
            });
        });
    };
});

// Модальне окна

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalButtonsClose = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');


modalButtons.forEach((item) => {
    item.addEventListener('click', function() {
        const modalId = this.dataset.modalButton;
        console.log(item);
        console.log(modalId);

        const modal = document.querySelector('#' + modalId);
        console.log(modal);

        modal.classList.remove('hidden-modal');
        bodyLock.classList.add('lock-body');
    })
});

modalButtonsClose.forEach((item) => {
    item.addEventListener('click', function() {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden-modal');
        bodyLock.classList.remove('lock-body');
    })
})


// Прокрутка при клике Jquery

$("a").on("click", function(e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});