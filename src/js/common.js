 $(document).ready(function() {
$('.slider').slick({
  slidesToShow: 1,
  centerPadding: "0px",
  nextArrow: '<i class="icon-r-arrow"></i>',
  prevArrow: '<i class="icon-l-arrow"></i>',
  speed: 500
});

$('.slider-cats').slick({
 infinite: true,
  speed: 300,
  slidesToShow: 7,
    slidesToScroll: 1,
  nextArrow: '<i class="icon-cat-arrow-r"></i>',
  prevArrow: '<i class="icon-cat-arrow-l"></i>',
});
$('.slide-products').slick({
  slidesToShow: 3,
  centerPadding: "0px",
  infinite: true,
  dots: false,
  nextArrow: '.next_arr',
  prevArrow: '.previous_arr',
  speed: 500
});

$('.news-slide').slick({
  slidesToShow: 2,
  infinite: true,
  dots: false,
  nextArrow: '.news-next_arr',
  prevArrow: '.news-previous_arr',
  speed: 500
});



 });