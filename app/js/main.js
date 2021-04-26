$(function () {

  $('.menu__button, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $(".shop-card__star").rateYo({
    rating: 4,
    starWidth: "15px",
  })

  let slides = 3;
  if(window.innerWidth > 1240) {
      slides = 3;
      window.reload;
    }
    else if (window.innerWidth < 1240 && window.innerWidth > 677){
      slides = 2;
      console.log("|window.innerWidth");
    }
    else if (window.innerWidth < 676){
      console.log(window.innerWidth);
      slides = 1;
    }  
/**/
    window.onresize = function( event ) {
      document.location.reload();
    };
    
  console.log(window.innerWidth);
  

  $('.store-slider').slick({
    arrows: true,
    slidesToShow: slides,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev store-slider__button store-slider__button--slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next store-slider__button store-slider__button--slick-next"></button>',
  });

});