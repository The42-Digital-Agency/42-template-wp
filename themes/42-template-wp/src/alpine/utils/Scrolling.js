export class Scrolling extends HTMLElement {
  constructor() {
    super();

    class Scrolling {
      constructor(box, speed) {
        const innerElement = (box.children && box.children[0]) || null;
        if (!innerElement) throw 'No child node found';

        innerElement.style.position = 'relative';

        this.position = 0;
        this.speed = speed;
        this.box = box;
        this.innerElement = innerElement.cloneNode(true);
        this.boxWidth = this.getWidth(box);
        this.innerElementWidth = this.getWidth(innerElement);
        this.setUpChildren();
      }

      getWidth(element) {
        const rect = element.getBoundingClientRect();
        return rect.right - rect.left;
      }

      refreshWidths() {
        this.boxWidth = this.getWidth(this.box);
        this.innerElementWidth = this.getWidth(this.box.children[0]);
      }

      calculateNumElements() {
        return Math.ceil(this.boxWidth / this.innerElementWidth) + 1;
      }

      setUpChildren() {
        const qty = this.calculateNumElements();
        if (qty > this.box.children.length) {
          for (let i = this.box.children.length; i < qty; i++) {
            this.box.appendChild(this.innerElement.cloneNode(true));
          }
        } else if (qty < this.box.children.length) {
          for (let i = qty; i < this.box.children.length; i++) {
            this.box.removeChild(this.box.lastChild);
          }
        }
      }

      nextFrame(delta, direction) {
        this.refreshWidths();
        this.setUpChildren();
        Array.prototype.forEach.call(this.box.children, el => {
          el.style.transform =
            direction === 'rtl'
              ? `translateX(${this.position}px)`
              : `translateX(${-this.position}px)`;
        });
        this.position += (this.speed * delta) / 1000;
        if (this.position >= this.innerElementWidth) {
          this.position %= this.innerElementWidth;
        }
      }

      start(direction) {
        this.running = true;
        let lastTime = null;
        const loopFunc = () => {
          if (!this.running) return;
          const now = Date.now();
          const delta = lastTime === null ? 0 : now - lastTime;
          this.nextFrame(delta, direction);
          lastTime = now;
          window.requestAnimationFrame(loopFunc);
        };
        window.requestAnimationFrame(loopFunc);
      }

      stop() {
        this.running = false;
      }
    }

    const speed =
      window.innerWidth > 768
        ? parseInt(this.dataset.scrollingSpeed)
        : parseInt(this.dataset.scrollingSpeed) / 1.5;
    const direction = this.dataset.scrollingDirection;
    const scrollingText = new Scrolling(this, speed);

    if (this.dataset.pauseOnHover === 'true') {
      let windowInFocus = true;

      window.addEventListener('blur', () => {
        windowInFocus = false;
      });

      window.addEventListener('focus', () => {
        windowInFocus = true;
      });

      this.addEventListener('mouseover', () => {
        if (windowInFocus) {
          scrollingText.stop();
        }
      });

      this.addEventListener('mouseout', () => {
        if (windowInFocus) {
          scrollingText.start(direction);
        }
      });
    }

    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        scrollingText.start(direction);
      } else {
        scrollingText.stop();
      }
    });
    intersectionObserver.observe(this);
  }
}
