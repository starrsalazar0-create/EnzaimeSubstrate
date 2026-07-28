export default function initScrollEffects() {
  // Reveal on intersection
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // optionally unobserve to save work
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  }

  // Simple parallax for elements with data-parallax
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
  if (parallaxEls.length) {
    let ticking = false;
    function update() {
      const scrollY = window.scrollY || window.pageYOffset;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.02;
        const offset = el.getBoundingClientRect().top + scrollY;
        const move = (scrollY - offset) * speed;
        el.style.transform = `translateY(${move}px)`;
      });
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    // initial
    update();
  }
}
