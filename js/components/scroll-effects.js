// Scroll Reveal Setup
$(function() {
  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3
  });

  sr.reveal('.about');
  sr.reveal('.skills');
  sr.reveal('.projects-section', {viewFactor: 0.1});
});
