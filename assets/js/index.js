$(document).ready(function () {
  $(".home-card-carousel .carousel").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button class="prev-arrow flex align-center justify-center"><img src="./assets/images/home-page/prevBlackArrow.svg" /></button>`,
    nextArrow: `<button class="next-arrow flex align-center justify-center"><img src="./assets/images/home-page/nextBlackArrow.svg" /></button>`,
  });
  // box carousel
  $(".box-carousel-container").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    variableWidth: true,
    prevArrow: `<button class="prev-arrow flex align-center justify-center"><img src="./assets/images/home-page/prevBlackArrow.svg" /></button>`,
    nextArrow: `<button class="next-arrow flex align-center justify-center"><img src="./assets/images/home-page/nextBlackArrow.svg" /></button>`,
  });
});
