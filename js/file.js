$(document).ready(function () {
    $('.icon-menu').click(function () {
        $('.icon-menu,.menu__body').toggleClass('active')
        $('body').toggleClass('lock')
    });
});