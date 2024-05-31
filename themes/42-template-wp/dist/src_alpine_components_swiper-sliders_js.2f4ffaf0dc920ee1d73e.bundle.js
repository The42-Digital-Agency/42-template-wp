"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkmy_theme"] = globalThis["webpackChunkmy_theme"] || []).push([["src_alpine_components_swiper-sliders_js"],{

/***/ "./src/alpine/components/swiper-sliders.js":
/*!*************************************************!*\
  !*** ./src/alpine/components/swiper-sliders.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   swiperSlider: () => (/* binding */ swiperSlider)\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);\n\n// PAY ATTENTION ON USAGE\n// <div\n//   className=\"swiper\"\n//   x-ignore\n//   ax-load\n//   x-data=\"swiperSlider($el, 'test_slider')\"\n// ></div>\n\nconst options = {\n  test_slider: {\n    slidesPerView: 3,\n    spaceBetween: 30,\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev',\n    },\n  },\n};\n\nconst swiperSlider = (htmlElement, sliderOptions) => ({\n  isBeginning: true,\n  isEnd: false,\n  slider: null,\n  slidesCount: 0,\n  init() {\n    const _this = this;\n    this.slider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](htmlElement, {\n      ...options[sliderOptions],\n      on: {\n        slideChange: function (swiper) {\n          _this.isBeginning = swiper.isBeginning;\n          _this.isEnd = swiper.isEnd;\n        },\n        observerUpdate: function (swiper) {\n          _this.slidesCount = swiper.slides.length;\n          swiper.update();\n        },\n      },\n    });\n  },\n});\n\n\n//# sourceURL=webpack://my-theme/./src/alpine/components/swiper-sliders.js?");

/***/ })

}]);