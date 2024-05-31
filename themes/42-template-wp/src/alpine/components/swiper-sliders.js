import Swiper, { Autoplay, Pagination, Navigation } from 'swiper';
Swiper.use([Autoplay, Pagination, Navigation]);

// PAY ATTENTION ON USAGE
// <div
//   className="swiper"
//   x-ignore
//   ax-load
//   x-data="swiperSlider($el, 'test_slider')"
// ></div>

const options = {
  test_slider: {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  },
};

export const swiperSlider = (htmlElement, sliderOptions) => ({
  isBeginning: true,
  isEnd: false,
  slider: null,
  slidesCount: 0,
  init() {
    const _this = this;
    this.slider = new Swiper(htmlElement, {
      ...options[sliderOptions],
      on: {
        slideChange: function (swiper) {
          _this.isBeginning = swiper.isBeginning;
          _this.isEnd = swiper.isEnd;
        },
        observerUpdate: function (swiper) {
          _this.slidesCount = swiper.slides.length;
          swiper.update();
        },
      },
    });
  },
});
