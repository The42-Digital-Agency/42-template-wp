export const faq = () => ({
  index_visible_item: null,

  toggle(index) {
    this.index_visible_item === index
      ? (this.index_visible_item = null)
      : (this.index_visible_item = index);
  },
});
