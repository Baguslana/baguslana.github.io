document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });

  const navLinks = document.querySelectorAll('.nav-link');

  function removeActiveClasses() {
    navLinks.forEach((link) => link.classList.remove('active'));
  }

  function setActiveLink() {
    const currentHash = window.location.hash;
    removeActiveClasses();
    if (currentHash) {
      const activeLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    } else {
      document.querySelector('.nav-link[href="#home"]').classList.add('active');
    }
  }

  setActiveLink();
  window.addEventListener('hashchange', setActiveLink);
});
