export function setHeaderHeight() {
  const header = document.querySelector('#header');
  const headerHeight = header.offsetHeight;

  document.documentElement.style.setProperty('--header-height', Math.round(headerHeight) + 'px');
}
