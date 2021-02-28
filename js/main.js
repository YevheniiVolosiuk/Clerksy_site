$(document).ready(function() {
    $('.header__box-burger').click(function(event) {
        $('.header__box-burger,.header__box-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});