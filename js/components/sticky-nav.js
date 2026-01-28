// Sticky Navigation
(function() {
  const nav = document.getElementById('stickyNav');
  const intro = document.querySelector('.intro');

  if (!nav || !intro) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNav() {
    const scrollY = window.scrollY;

    // Always keep nav visible and maintain body padding
    nav.classList.add('visible');
    document.body.classList.add('nav-visible');

    // Update active link based on scroll position
    updateActiveLink();

    lastScrollY = scrollY;
    ticking = false;
  }

  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.sticky-nav__link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
  }

  // Scroll event listener
  window.addEventListener('scroll', requestTick);

  // Smooth scroll with custom easing
  function smoothScrollTo(targetPosition, duration = 800) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Easing function: easeInOutCubic
    function easeInOutCubic(t) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // Smooth scroll for nav links
  document.querySelectorAll('.sticky-nav__link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for sticky nav height
        smoothScrollTo(offsetTop, 1000);
      }
    });
  });

  // Initial check
  updateNav();
})();
