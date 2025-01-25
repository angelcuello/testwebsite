$(document).ready(function() {
  // 1) Insert the navbar
  $("#navbar-placeholder").load("../../navbar/navbar.html", function() {
    // 2) Once navbar.html is successfully loaded, we can grab the toggle switch
    const toggleSwitch = document.getElementById('flexSwitchCheckDefault');

    // 3) Read the saved state & make sure the toggle state is accurate
    const savedState = localStorage.getItem('darkMode');
    if (savedState === 'false') {
      toggleSwitch.checked = false;
    } else {
      // 'true' or null -> dark mode
      toggleSwitch.checked = true;
    }

    // 4) Listen for changes on the toggle and update theme + localStorage
    toggleSwitch.addEventListener('change', function() {
      if (toggleSwitch.checked) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('darkMode', 'false');
      }
    });
  });
});