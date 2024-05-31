const DESKTOP_WIDTH = 1024;

export const mobileMenu = {
  visible: false,
  isDesktop: window.innerWidth >= DESKTOP_WIDTH,

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      window.addEventListener('resize', () => {
        this.checkWindowSize();
      });
    });
  },

  hide() {
    this.visible = false;
    document.body.style.overflow = 'auto';
  },

  show() {
    this.visible = true;
    document.body.style.overflow = 'hidden';
  },

  checkWindowSize() {
    window.addEventListener('resize', () => {
      const currentWidth = window.innerWidth;

      if (!this.isDesktop && currentWidth >= DESKTOP_WIDTH && this.visible === true) {
        this.isDesktop = true;
        this.hide();
      } else {
        this.isDesktop = false;
      }
    });
  },
};
