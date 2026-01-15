$(function() {
  // ScrollReveal setup
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
  sr.reveal('.project-card', {
    interval: 100,
    viewFactor: 0.2
  });
  sr.reveal('.other-projects', {viewFactor: 0.1});
});
