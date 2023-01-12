$(document).ready(function () {
  $(".home-card-carousel .carousel").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button class="prev-arrow flex align-center justify-center " onmouseover="progress_over1()" onmouseleave="progress_leave1()" onclick="dec_progress()"><img src="./assets/images/home-page/prevBlackArrow.svg" /><svg class="absolute prev-svg" x="0px" y="0px" class="our_services__circle_progress" width="50px" height="50px" viewBox="0 0 200 200"><circle class="our_services__circle" stroke="#FFB3C9"fill="none" stroke-width="10" cx="100" cy="100" r="90"></circle></svg></button>`,
    nextArrow: `<button class="next-arrow flex align-center justify-center" onmouseover="progress_over2()" onmouseleave="progress_leave2()" onclick="inc_progress()"><img src="./assets/images/home-page/nextBlackArrow.svg" /><svg class="absolute next-svg" x="0px" y="0px" class="our_services__circle_progress" width="50px" height="50px" viewBox="0 0 200 200"><circle class="our_services__circle" stroke="#FFB3C9"fill="none" stroke-width="10" cx="100" cy="100" r="90"></circle></svg></button>`,
  });

  // blurr-img carousel
  $(".blurr-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    prevArrow: `<button class="prev-arrow flex align-center justify-center absolute" onmouseover="blurr_over1()" onmouseleave="blurr_leave1()" onclick="blurr_prev()"><img src="./assets/images/home-page/back-Icon.svg" /><svg class="absolute prev-svg" x="0px" y="0px" class="our_services__circle_progress" width="50px" height="50px" viewBox="0 0 200 200"><circle class="our_services__circle" stroke="#FFB3C9"fill="none" stroke-width="10" cx="100" cy="100" r="90"></circle></svg></button>`,
    nextArrow: `<button class="next-arrow flex align-center justify-center absolute" onmouseover="blurr_over2()" onmouseleave="blurr_leave2()" onclick="blurr_next()"><img src="./assets/images/home-page/fw-Icon.svg" /><svg class="absolute next-svg" x="0px" y="0px" class="our_services__circle_progress" width="50px" height="50px" viewBox="0 0 200 200"><circle class="our_services__circle" stroke="#FFB3C9"fill="none" stroke-width="10" cx="100" cy="100" r="90"></circle></svg></button>`,
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
  const x =
    parseInt(
      document.querySelector(".home-card-carousel .slick-current").classList[0]
    ) - 1;

  const y = document.querySelector(".home-card-carousel .prev-svg");
  y.style.strokeDashoffset = (565 * (3 - x)) / 6;
}

function progress_leave1(e) {
  const x = parseInt(
    document.querySelector(".home-card-carousel .slick-current").classList[0]
  );
  const y = document.querySelector(".home-card-carousel .prev-svg");
  y.style.strokeDashoffset = 565;
}

function progress_over2(e) {
  const x =
    parseInt(
      document.querySelector(".home-card-carousel .slick-current").classList[0]
    ) - 1;
  const y = document.querySelector(".home-card-carousel .next-svg");
  y.style.strokeDashoffset = (565 * (3 - x)) / 6;
}

function progress_leave2(e) {
  const x = parseInt(
    document.querySelector(".home-card-carousel .slick-current").classList[0]
  );
  const y = document.querySelector(".home-card-carousel .next-svg");
  y.style.strokeDashoffset = 565;
}

function dec_progress() {
  const x =
    parseInt(
      document.querySelector(".home-card-carousel .slick-current").classList[0]
    ) - 1;
  console.log(x);
  const prev = document.querySelector(".home-card-carousel .prev-svg");
  const slides = 6;
  if (x > 0) prev.style.strokeDashoffset = (565 * (4 - x)) / slides;
}

function inc_progress() {
  const x = parseInt(
    document.querySelector(".home-card-carousel .slick-current").classList[0]
  );
  const next = document.querySelector(".home-card-carousel .next-svg");
  const slides = 6;
  if (x < 4) {
    next.style.strokeDashoffset = (565 * (3 - x)) / 6;
  }
}

// Blurr image carousel

function blurr_over1() {
  const x = document.querySelector(".blurr-carousel .prev-svg");
  const y = parseInt(
    document.querySelector(".blurr-carousel .slick-current").classList[0]
  );
  x.style.strokeDashoffset = (565 * (2 - y)) / 2;
}

function blurr_leave1() {
  const x = document.querySelector(".blurr-carousel .prev-svg");
  x.style.strokeDashoffset = 565;
}

function blurr_over2() {
  const x = document.querySelector(".blurr-carousel .next-svg");
  const y = parseInt(
    document.querySelector(".blurr-carousel .slick-current").classList[0]
  );
  x.style.strokeDashoffset = (565 * (2 - y)) / 2;
}

function blurr_leave2() {
  const x = document.querySelector(".blurr-carousel .next-svg");
  x.style.strokeDashoffset = 565;
}

function blurr_next() {
  document.querySelector(
    ".blurr-carousel .next-svg"
  ).style.strokeDashoffset = 0;
}

function blurr_prev() {
  document.querySelector(".blurr-carousel .prev-svg").style.strokeDashoffset =
    565 / 2;
}
