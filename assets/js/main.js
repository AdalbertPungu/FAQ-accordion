document.querySelectorAll('.accordion__actions').forEach(accordion => {
  accordion.addEventListener('click', () => {
    const description = accordion.nextElementSibling;
    const iconPlus = accordion.querySelector('.icon__plus');
    const iconMinus = accordion.querySelector('.icon__minus');

    if (description.style.display === 'block') {
      description.style.display = 'none';
      iconPlus.style.display = 'block';
      iconMinus.style.display = 'none';
    } else {
      description.style.display = 'block';
      iconPlus.style.display = 'none';
      iconMinus.style.display = 'block';
    }
  });
});
