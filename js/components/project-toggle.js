// Toggle Project Details
function toggleProject(header) {
  const project = header.parentElement;
  const details = project.querySelector('.project__details');
  const icon = header.querySelector('.toggle-icon');

  project.classList.toggle('expanded');

  if (project.classList.contains('expanded')) {
    details.style.maxHeight = details.scrollHeight + 'px';
    icon.textContent = '−';
  } else {
    details.style.maxHeight = '0';
    icon.textContent = '+';
  }
}
