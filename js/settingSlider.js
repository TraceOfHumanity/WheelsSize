$(function () {
  $('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    fade: true,
    asNavFor: '.slider2'
  });
  $('.slider2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider1',
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1131,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          verticalSwiping: false,
          centerMode: false,

        }
      },
    ]
  });

   $('.sliderUseges').slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    rows: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1131,
        settings: {
          rows: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          arrows: true,
        }
      },
    ]
  });
})