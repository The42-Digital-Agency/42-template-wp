import { Scrolling } from '../utils/Scrolling';

export const marquee = () => ({
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      if (typeof customElements.get('scrolling-items') == 'undefined') {
        customElements.define('scrolling-items', Scrolling);
      }
    });
  },
});
