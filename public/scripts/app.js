const toggleButton = document.querySelector('#toggle-button');

toggleButton.addEventListener('click', () => {
  const hasDarkClass = toggleButton.classList.contains('dark');

  if (hasDarkClass) {
    toggleButton.classList.remove('dark');
    toggleButton.classList.add('light');
  } else {
    toggleButton.classList.remove('light');
    toggleButton.classList.add('dark');
  }
});
