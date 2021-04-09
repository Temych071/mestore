$(function () {

  $(".shop-card__star").rateYo({
    rating: 4,
    starWidth: "15px",
  })

  $('.store-slider').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev store-slider__button store-slider__button--slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next store-slider__button store-slider__button--slick-next"></button>',
  });

});