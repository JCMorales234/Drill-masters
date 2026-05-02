const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (themeToggleDarkIcon && themeToggleLightIcon) {
  if (localStorage.getItem('drill-theme') === 'dark') {
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    themeToggleDarkIcon.classList.remove('hidden');
  }
}

const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn && themeToggleDarkIcon && themeToggleLightIcon) {
  themeToggleBtn.addEventListener('click', function () {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.getItem('drill-theme')) {
      if (localStorage.getItem('drill-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('drill-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('drill-theme', 'light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('drill-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('drill-theme', 'dark');
      }
    }
  });
}

const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}