// Sketchfab Iframe Observer - Pause when out of viewport
(function() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const sketchfabIframes = document.querySelectorAll('.sketchfab-embed-wrapper iframe');

    if (sketchfabIframes.length === 0) return;

    // Create Intersection Observer
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of iframe is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const iframe = entry.target;

        // Get the Sketchfab API instance
        if (iframe.contentWindow) {
          try {
            if (entry.isIntersecting) {
              // Resume/play when visible
              iframe.contentWindow.postMessage('play', '*');
            } else {
              // Pause when not visible
              iframe.contentWindow.postMessage('pause', '*');
            }
          } catch (error) {
            // Silently fail if postMessage doesn't work
            console.debug('Sketchfab control message failed:', error);
          }
        }
      });
    }, observerOptions);

    // Observe all Sketchfab iframes
    sketchfabIframes.forEach(iframe => {
      observer.observe(iframe);
    });
  }
})();
