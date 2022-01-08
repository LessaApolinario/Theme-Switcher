const toggleButton = document.querySelector('#toggle-button');
const container = document.querySelector('.container');

toggleButton.addEventListener('click', () => {
  const hasDarkClass = toggleButton.classList.contains('dark');
  const isContainerDark = container.classList.contains('dark');

  if (hasDarkClass && isContainerDark) {
    toggleButton.classList.remove('dark');
    toggleButton.classList.add('light');

    container.classList.remove('dark');
    container.classList.add('light');
  } else {
    toggleButton.classList.remove('light');
    toggleButton.classList.add('dark');

    container.classList.remove('light');
    container.classList.add('dark');
  }
});
