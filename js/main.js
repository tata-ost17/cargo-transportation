$(function () {

   $('.car__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
         {
            breakpoint: 920,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 520,
            settings: {
               slidesToShow: 1,
            }
         },
      ]
   });

   $('.menu__btn').on('click', function () {
      $('.menu__btn').toggleClass('menu__btn--active');
      $('.menu__list').toggleClass('menu__list--active')
   });

   $('.menu__list-link').on('click', function () {
      $('.menu__btn').removeClass('menu__btn--active');
      $('.menu__list').removeClass('menu__list--active');
   });

   new WOW().init();

});