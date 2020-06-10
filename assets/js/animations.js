$(window).scroll(function () {
  $('#first-project').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height()) {
      if (!$(this).hasClass('slide-right')) {
        $(this).addClass('slide-right');
      }
    }
    else if ($(this).hasClass('slide-right')) {
      $(this).removeClass('slide-right');
    }
  });
});