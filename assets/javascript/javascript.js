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

$(document).on('click', '.contact-submit', () => {
  event.preventDefault();

  $.ajax({
    url: "https://formspree.io/JaySull514@gmail.com",
    method: "POST",
    data: {
      name: $('.contact-name').val(),
      email: $('.contact-email').val(),
      message: $('.contact-message').val(),
          },
    dataType: "json",
    success: function(data){
      console.log(data);
      alert("Message has been sent, thanks");
    }
  });
  $('.contact-name').val('');
  $('.contact-email').val('');
  $('.contact-message').val('');
});