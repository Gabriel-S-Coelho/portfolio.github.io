// Scroll to Top Button
$(function() {
  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  window.addEventListener('scroll', function() {
    if (window.scrollY > introHeight) {
      $topButton.fadeIn();
    } else {
      $topButton.fadeOut();
    }
  }, false);

  topButton.addEventListener('click', function() {
    $('html, body').animate({scrollTop: 0}, 500);
  });
});
