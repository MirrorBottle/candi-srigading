// Product Slider
const swiperProducts = new Swiper('.js-vv-product-swiper', {
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.vv-product-swiper-btn-next',
    prevEl: '.vv-product-swiper-btn-prev',
  },
});

// Playlists Slider
const swiperPlaylists = new Swiper('.js-vv-playlist-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1210: {
      slidesPerView: 4,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.vv-playlist-swiper-btn-next',
    prevEl: '.vv-playlist-swiper-btn-prev',
  },
});

// Latest Videos Slider
const swiperLatestVideos = new Swiper('.js-vv-latest-videos-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1210: {
      slidesPerView: 5,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-vv-latest-videos-swiper-btn-next',
    prevEl: '.js-vv-latest-videos-swiper-btn-prev',
  },
});

// Featured Gaming Slider
const swiperFeaturedGaming = new Swiper('.js-vv-videos-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1210: {
      slidesPerView: 5,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-vv-videos-swiper-btn-next',
    prevEl: '.js-vv-videos-swiper-btn-prev',
  },
});

// Featured Videos
const swiperFeaturedVideos = new Swiper('.js-vv-videos-featured-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    1210: {
      slidesPerView: 7,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-vv-videos-featured-swiper-btn-next',
    prevEl: '.js-vv-videos-featured-swiper-btn-prev',
  },
});


// Info Slider
const swiperChannelInfo = new Swiper('.js-vv-channel-info-swiper', {
  slidesPerView: 1,
  loop: true,
  parallax: true,
  speed: 1000,
  pagination: {
    el: '.js-vv-channel-info-swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'js-vv-pagination-bullet',
    bulletActiveClass: 'js-vv-pagination-bullet-active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-vv-channel-info-swiper-btn-next',
    prevEl: '.js-vv-channel-info-swiper-btn-prev',
  },
});

// Hero Slider
const swiperHeroSlider = new Swiper('.js-vv-hero-swiper', {
  slidesPerView: 1,
  loop: false,
  parallax: true,
  speed: 500,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  on: {
    slideChange: function() {
      const currentIndex = this.realIndex;
      const currentSlide = this.slides[currentIndex];
      currentSlide.classList.add('vv-slide-played');
    }
  },
});
