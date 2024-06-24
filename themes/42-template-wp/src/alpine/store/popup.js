import Alpine from "alpinejs";

export const popup = {
  popups: {},

  show(popup) {
    this.popups[popup] = true;
    Alpine.store("stop-scroll").enable();
  },

  hide(popup) {
    if (this.popups[popup]) {
      this.popups[popup] = false;
      delete this.popups[popup];
      if (Object.keys(this.popups).length === 0) {
        Alpine.store("stop-scroll").disable();
      }
    }
  },

  isVisible(popup) {
    return !!this.popups[popup];
  },
};
