/**
 * imports
 */
import Alpine from 'alpinejs';
import AsyncAlpine from 'async-alpine';

import 'swiper/swiper.min.css';
import './style/main.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

//Alpine plugins
import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';
import mask from '@alpinejs/mask';

// store
import { mobileMenu } from './alpine/store/mobileMenu';

// components
import components from './alpine/components/index';

// utils
import { setHeaderHeight } from './alpine/utils/setHeaderHeight';

window.addEventListener('DOMContentLoaded', setHeaderHeight);
window.addEventListener('resize', setHeaderHeight);

document.addEventListener('alpine:init', () => {
  // store
  Alpine.store('mobileMenu', mobileMenu);

  // components
  Alpine.data('marquee', components.marquee);

  //plugins more info here https://alpinejs.dev/start-here
  Alpine.plugin(collapse);
  Alpine.plugin(mask);
  Alpine.plugin(intersect);
});

AsyncAlpine.init(Alpine);

//async components
AsyncAlpine.data('swiperSlider', () => import('./alpine/components/swiper-sliders'));

AsyncAlpine.start();
Alpine.start();
