// script.js

// Add hover effect to navigation links
const navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('hover-effect');
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('hover-effect');
  });
});

// Add hover effect to portfolio items
const portfolioItems = document.querySelectorAll('.item');

portfolioItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hover-effect');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hover-effect');
  });
});