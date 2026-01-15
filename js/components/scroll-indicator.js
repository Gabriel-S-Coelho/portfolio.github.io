// Scroll Indicator Click Handler with Animation
function scrollToAbout() {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    // Get the position of the about section
    const targetPosition = aboutSection.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Animation duration in ms
    let start = null;

    // Easing function for smooth animation
    function easeInOutCubic(t) {
      return t < 0.5
        ? 4 * t * t * t
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    // Animation function
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }
}
