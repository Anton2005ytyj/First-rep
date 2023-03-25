$('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '<img src = "images/352467_arrow_left_icon.png">',
    nextArrow: '<img src = "images/352468_arrow_right_icon.png">',
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.scroll').on('click', function () {
    let block = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(block).offset().top
    }, {
        duration: 700,
        easing: "linear"
    });
    return false;
});
