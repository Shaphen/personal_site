$(window).scroll(function () {
  $('#what-now1').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fade-in-about'))) {
      $(this).addClass('fade-in-about');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fade-in-about')) {
      $(this).removeClass('fade-in-about');
    }
  });

  $('#what-now2').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fade-in-about'))) {
      $(this).addClass('fade-in-about');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fade-in-about')) {
      $(this).removeClass('fade-in-about');
    }
  });
  
  $('#first-project').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height()) {
      $(this).addClass('slide-right');
    }
    else if ($(this).hasClass('slide-right')) {
      $(this).removeClass('slide-right');
    }
  });

  $('.first-project-text').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height()) {
      $(this).addClass('slide-left');
    }
    else if ($(this).hasClass('slide-left')) {
      $(this).removeClass('slide-left');
    }
  });
  
  $('#second-project').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
    && $(window).scrollTop() < $(this).position().top + $(this).height()) {
      $(this).addClass('slide-left');
    }
    else if ($(this).hasClass('slide-left')) {
      $(this).removeClass('slide-left');
    }
  });

  $('.second-project-text').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height()) {
      $(this).addClass('slide-right');
    }
    else if ($(this).hasClass('slide-right')) {
      $(this).removeClass('slide-right');
    }
  });

  $('#third-project').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top // if window bottom position is greater than ele top positon
      && $(window).scrollTop() < $(this).position().top + $(this).height()) { // if window top position is less than ele bottom positon
      $(this).addClass('slide-right');
    } else {
      $(this).removeClass('slide-right');
    }
  });

  $('.third-project-text').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height()) {
      $(this).addClass('slide-left');
    }
    else if ($(this).hasClass('slide-left')) {
      $(this).removeClass('slide-left');
    }
  });

  $('#tech-list').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top // if window bottom position is greater than ele top positon
    && $(window).scrollTop() < $(this).position().top + $(this).height()) { // if window top position is less than ele bottom positon
      $(this).addClass('fade-in');
    } else {
      $(this).removeClass('fade-in');
    }
  });

  $('#tech-list2').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height()) {
      $(this).addClass('fade-in-slower');
    } else {
      $(this).removeClass('fade-in-slower');
    }
  });
  
  $('#about-section1').each(function () {
    if($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fade-in-bottom'))) {
      $(this).addClass('fade-in-bottom');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 600
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fade-in-bottom')) {
      $(this).removeClass('fade-in-bottom');
    }
  });

  $('#about-section2').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fade-in-bottom'))) {
      $(this).addClass('fade-in-bottom');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 600
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fade-in-bottom')) {
      $(this).removeClass('fade-in-bottom');
    }
  });

  $('#about-section3').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fade-in-bottom'))) {
      $(this).addClass('fade-in-bottom');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 600
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fade-in-bottom')) {
      $(this).removeClass('fade-in-bottom');
    }
  });

  $('#git-link').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('zoom'))) {
      $(this).addClass('zoom');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 600
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('zoom')) {
      $(this).removeClass('zoom');
    }
  });

  $('#linked-link').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('zoom'))) {
      $(this).addClass('zoom');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 600
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('zoom')) {
      $(this).removeClass('zoom');
    }
  });

  $('#resume-link').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('zoom'))) {
      $(this).addClass('zoom');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 600
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('zoom')) {
      $(this).removeClass('zoom');
    }
  });
});