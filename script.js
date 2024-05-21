document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  // Function to remove 'active' class from all nav links
  function removeActiveClasses() {
    navLinks.forEach((link) => link.classList.remove('active'));
  }

  // Function to add 'active' class to the current nav link
  function setActiveLink() {
    const currentHash = window.location.hash;
    removeActiveClasses();
    if (currentHash) {
      const activeLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    } else {
      // Default to 'home' if no hash is present
      document.querySelector('.nav-link[href="#home"]').classList.add('active');
    }
  }

  // Set the active link on initial load
  setActiveLink();

  // Update active link on hash change
  window.addEventListener('hashchange', setActiveLink);
});
