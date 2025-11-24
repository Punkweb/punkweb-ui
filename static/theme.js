// Set theme before DOM is loaded to avoid FOUC

(function () {
  var html = document.documentElement;
  var savedTheme = localStorage.getItem('pw-theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  }
})();

// After DOM is loaded, set the toggle button character and register event listener
document.addEventListener('DOMContentLoaded', function () {
  var html = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');
  var savedTheme = localStorage.getItem('pw-theme');
  var character = {
    light: '&#9790', // moon
    dark: '&#9728;', // sun
  };

  if (themeToggle) {
    if (savedTheme) {
      themeToggle.innerHTML = character[savedTheme === 'dark' ? 'dark' : 'light'];
    }

    themeToggle.addEventListener('click', function () {
      var currentTheme = html.getAttribute('data-theme');
      var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      themeToggle.innerHTML = character[newTheme === 'dark' ? 'dark' : 'light'];
      localStorage.setItem('pw-theme', newTheme);
    });
  }
});
