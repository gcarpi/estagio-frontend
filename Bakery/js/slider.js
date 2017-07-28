
$(function() {
  /* Configs slider banner */
  var slider = $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    variableWidth: true
  });

  /* Configs slider partners */
  var sliderPartners = $('.partners-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: true
  });

})
