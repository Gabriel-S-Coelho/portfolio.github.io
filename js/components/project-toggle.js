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

// Toggle Project Category
function toggleCategory(header) {
  const category = header.parentElement;
  const content = category.querySelector('.category-content');
  const icon = header.querySelector('.category-toggle-icon');

  content.classList.toggle('expanded');

  if (content.classList.contains('expanded')) {
    icon.textContent = '−';
  } else {
    icon.textContent = '+';
  }
}
