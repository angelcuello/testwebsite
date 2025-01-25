// dark-mode-preload.js

(function() {
    const savedState = localStorage.getItem('darkMode');
    if (savedState === 'false') {
      // Force light mode
      document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
      // If 'true' or null, default to dark
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
  })();