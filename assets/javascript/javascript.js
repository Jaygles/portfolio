$(window).scroll(function() {
    if ($(this).scrollTop() < 460) {
        $('.nav-icon').css({
            'opacity': 0
        });
    } else if ($(this).scrollTop() > 460) {
        $('.nav-icon').css({
            'opacity': -5 + ($(this).scrollTop() / 100)
        });
    };
});

console.log('hello');

$(document).on('click', '.contact-submit', function() {
    event.preventDefault();
    $('.contact-name').val('');
    $('.contact-email').val('');
    $('.contact-message').val('');
})
