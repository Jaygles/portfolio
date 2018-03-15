// Nav-bar icon fade function
$(window).scroll(() => {
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

// Contact form submission function
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

// Portfolio info modal
const $portfolioModal = $('.portfolio-modal');
const $portfolioImg = $('.portfolio-img');

function portfolioMouseMove(e) {
  const modalHeight = $portfolioModal[0].clientHeight;
  if (e.target.classList.contains('right')) {
    $portfolioModal.css({
      left: e.pageX - 440,
      top: e.pageY - modalHeight - 20,
    });
  } else {
    $portfolioModal.css({
      left: e.pageX + 40,
      top: e.pageY - modalHeight - 20,
    });
  }
}

function portfolioMouseOn(title, text) {
  $portfolioModal.css({
    'min-width': '400px',
    'max-width': '400px',
    visibility: 'visible',
    'z-index': '10',
  });
  $('.portfolio-modal-title').text(title);
  $('.portfolio-modal-info').text(text);
}

function portfolioMouseOff() {
  $portfolioModal.css({
    visibility: 'hidden',
    'z-index': '-1',
  });
}

$portfolioImg.mousemove((e) => {
  portfolioMouseMove(e);
});

$portfolioImg.on('mouseenter', (e) => {
  const attributes = e.currentTarget.attributes;
  const title = attributes.alt.value;
  const text = attributes['data-desc'].value;
  portfolioMouseOn(title, text);
});

$portfolioImg.on('mouseleave', () => {
  portfolioMouseOff();
});

// Google Analytics events

function handleOutboundLinkClicks(event, label) {
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: label,
    transport: 'beacon',
  });
}

$('.portfolio-link').click((event) => {
  const link = event.currentTarget.href;
  console.log(link);
  handleOutboundLinkClicks(event, link);
});
