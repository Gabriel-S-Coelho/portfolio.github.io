// Theme Toggle Functionality
$(function() {
  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme === 'dark') {
    document.body.classList.add('night');
    document.documentElement.classList.add('night');
  }

  // Toggle theme
  $('.theme-toggle').on('click', function() {
    document.body.classList.toggle('night');
    document.documentElement.classList.toggle('night');

    // Save theme preference
    const theme = document.body.classList.contains('night') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);

    // Add click animation
    $(this).css('transform', 'scale(0.95)');
    setTimeout(() => {
      $(this).css('transform', '');
    }, 150);
  });
});
