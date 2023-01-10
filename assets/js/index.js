$(document).ready(function () {
  $(".home-card-carousel .carousel").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button class="prev-arrow flex align-center justify-center" onmouseover="progress_over1()" onmouseleave="progress_leave1()" onclick="dec_progress()"><img src="./assets/images/home-page/prevBlackArrow.svg" /><svg class="absolute prev-svg" x="0px" y="0px" class="our_services__circle_progress" width="50px" height="50px" viewBox="0 0 200 200"><circle class="our_services__circle" stroke="#FFB3C9"fill="none" stroke-width="10" cx="100" cy="100" r="90"></circle></svg></button>`,
    nextArrow: `<button class="next-arrow flex align-center justify-center" onmouseover="progress_over2()" onmouseleave="progress_leave2()"><img src="./assets/images/home-page/nextBlackArrow.svg" /><svg class="absolute next-svg" x="0px" y="0px" class="our_services__circle_progress" width="50px" height="50px" viewBox="0 0 200 200"><circle class="our_services__circle" stroke="#FFB3C9"fill="none" stroke-width="10" cx="100" cy="100" r="90"></circle></svg></button>`,
  });

  // blurr-img carousel
  $(".blurr-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
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

// progress bar functions for home cards carousel
function progress_over1(e) {
  document.querySelector(
    ".home-card-carousel .prev-svg"
  ).style.strokeDashoffset = 565 / 2;
}
function progress_leave1(e) {
  document.querySelector(
    ".home-card-carousel .prev-svg"
  ).style.strokeDashoffset = 565;
}

function progress_over2(e) {
  document.querySelector(
    ".home-card-carousel .next-svg"
  ).style.strokeDashoffset = 565 / 2;
}
function progress_leave2(e) {
  document.querySelector(
    ".home-card-carousel .next-svg"
  ).style.strokeDashoffset = 565;
}

function dec_progress() {
  const x = document.quer;
}
