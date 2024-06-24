import axios from 'axios';

const URL = window.admin_data.ajaxurl;

export const loadMorePost = () => ({
  page: 2,
  postsPerPage: 3,
  category: '',
  tag: '',
  totalPages: 0,

  isShowBtnMore: false,
  isLoading: false,
  isError: false,

  async init() {
    const pages = this.$root.querySelector('[data-total-pages]');
    const category = this.$root.querySelector('[data-category]');
    const tag = this.$root.querySelector('[data-tag]');

    this.totalPages = pages ? pages.getAttribute('data-total-pages') : null;
    this.category = category ? category.getAttribute('data-category') : null;
    this.tag = tag ? tag.getAttribute('data-tag') : null;

    if (+this.totalPages > 1) {
      this.isShowBtnMore = true;
    }
  },

  async loadMore(id) {
    this.isLoading = true;
    this.isError = false;

    const requestBody = new FormData();

    requestBody.append('action', window.admin_data.load_more_posts);
    requestBody.append('paged', this.page);
    requestBody.append('posts_per_page', this.postsPerPage);

    this.category && requestBody.append('category', this.category);
    this.tag && requestBody.append('tag', this.tag);

    try {
      const response = await axios.post(URL, requestBody);

      if (response.status !== 200) {
        this.isError = true;
        this.isLoading = false;

        console.error('ERROR', { status: response.status });
        return;
      }

      if (this.page === Number(this.totalPages)) {
        this.isShowBtnMore = false;
      }

      this.page += 1;

      const postsContainer = document.getElementById(id);

      const tempContainer = document.createElement('div');
      tempContainer.innerHTML = response.data;

      const newElements = tempContainer.children;

      Array.from(newElements).forEach(element => {
        element.classList.add('fadeIn');
      });

      postsContainer.append(...newElements);
    } catch (error) {
      this.isError = true;
      this.isLoading = false;

      console.error('Error:', error);
    } finally {
      this.isLoading = false;
    }
  },
});
