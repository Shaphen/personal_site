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

  $('#second-project').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height()) {
      if (!$(this).hasClass('slide-left')) {
        $(this).addClass('slide-left');
      }
    }
    else if ($(this).hasClass('slide-left')) {
      $(this).removeClass('slide-left');
    }
  });

  $('#third-project').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top // if window bottom position is greater than ele top positon
      && $(window).scrollTop() < $(this).position().top + $(this).height()) { // if window top position is less than ele bottom positon
      if (!$(this).hasClass('slide-right')) {
        $(this).addClass('slide-right');
      }
    } else {
      $(this).removeClass('slide-right');
    }
  });
});