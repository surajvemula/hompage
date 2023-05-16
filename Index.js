const toggleButton = document.getElementById('dropdownDefaultButton');
  const toggleIcon = document.getElementById('toggle-icon');

  toggleButton.addEventListener('click', () => {
    toggleIcon.classList.toggle('rotate-180');
  });
