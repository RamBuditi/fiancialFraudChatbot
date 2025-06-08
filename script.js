document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('themeToggle');

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }

  // Set button text to current active theme
  const isLight = document.body.classList.contains('light-mode');
  toggleBtn.textContent = isLight ? '☀️ Light Mode' : '🌙 Dark Mode';
  toggleBtn.setAttribute('aria-pressed', isLight ? 'true' : 'false');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const nowLight = document.body.classList.contains('light-mode');
    toggleBtn.textContent = nowLight ? '☀️ Light Mode' : '🌙 Dark Mode';
    toggleBtn.setAttribute('aria-pressed', nowLight ? 'true' : 'false');
    localStorage.setItem('theme', nowLight ? 'light' : 'dark');
  });
});
