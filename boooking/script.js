document.addEventListener('DOMContentLoaded', function() {
    // Create and append overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);
  
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
  
    function toggleMenu() {
      navLinks.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }
  
    menuButton.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  
    // Close menu when clicking a nav link
    const navLinksAll = document.querySelectorAll('.nav-link');
    navLinksAll.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
  });