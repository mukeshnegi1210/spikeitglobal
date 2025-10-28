import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";



export const marqueTextSlide = {
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 90,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
  shortSwipes: false,
  longSwipes: false,
  allowTouchMove: true,
  reverseDirection: true,
  autoplay: {
    delay: 0.3,
  },
  freeMode: true,
  speed: 4000,
  disableOnInteraction: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export const caseStudiesSlider = {
  modules: [Autoplay, Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};




export const collection1 = {
  modules: [Autoplay, Navigation, Pagination],
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
  observer: true,
  observeParents: true,
  shortSwipes: false,
  longSwipes: false,
  allowTouchMove: true,
  reverseDirection: true,
  autoplay: {
    delay: 0.3,
  },
  freeMode: true,
  speed: 4000,
  disableOnInteraction: true,
};

export const collection2 = {
  modules: [Autoplay, Navigation, Pagination],
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
  observer: true,
  observeParents: true,
  shortSwipes: false,
  longSwipes: false,
  allowTouchMove: true,
  autoplay: {
    delay: 0.3,
    reverseDirection: true,
  },
  freeMode: true,
  speed: 5000,
  disableOnInteraction: true,
};


export const myPortfolio = {
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: 2.43,
  spaceBetween: 70,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 1.4,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 2.4,
    },
  },
};



export const sliderSwiperIt = {
  modules: [Autoplay, Navigation, Pagination, EffectFade],
  slidesPerView: 1,
  effect: "fade",
  autoHeight: true,
  loop: true,
   fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

