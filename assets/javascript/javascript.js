$(window).scroll(function () {
  if ($(this).scrollTop() < 460) {
    $('.nav-icon').css({
      opacity: 0,
    });
  } else if ($(this).scrollTop() > 460) {
    $('.nav-icon').css({
      opacity: -4 + ($(this).scrollTop() / 110),
    });
  }
});

const $contactform = $('.contact-form');

$contactform.submit((e) => {
  e.preventDefault();

  $.ajax({
    url: 'https://formspree.io/JaySull514@gmail.com',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    success: () => {
      alert('Message has been sent, thanks');
    },
  });
  $('.contact-name').val('');
  $('.contact-email').val('');
  $('.contact-message').val('');
});
