const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
document.body.classList.add(Theme.LIGHT);
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
themeSwitchToggle.addEventListener('change', onThemeToggle);

function onThemeToggle(e) {
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);
}

function getCurrentTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === Theme.DARK) {
    themeSwitchToggle.checked = true;
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    return;
  }

  localStorage.setItem('theme', Theme.LIGHT);
}

getCurrentTheme();


 