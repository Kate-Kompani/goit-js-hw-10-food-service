const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchBtn = document.querySelector("#theme-switch-toggle")
console.dir(switchBtn.checked);

switchBtn.addEventListener('change', onSwitchBtnClic)
function onSwitchBtnClic(e) {
  console.log('check', e.target.checked)
  if (e.target.checked) {
    document.querySelector('body').classList.remove('light-theme')
    document.querySelector('body').classList.add('dark-theme')
    localStorage.setItem('theme', 'dark')
  }
  else {
    document.querySelector('body').classList.remove('dark-theme')
    document.querySelector('body').classList.add('light-theme')
    localStorage.setItem('theme', 'light')
  }
};

let theme = localStorage.getItem('theme');
console.log('тема:', theme);

if (theme === 'dark') {
  document.querySelector('body').classList.add('dark-theme')
  switchBtn.checked = true;
} else {
  document.querySelector('body').classList.add('light-theme')
  switchBtn.checked = false;
}

