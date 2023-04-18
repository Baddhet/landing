const dropdown = document.querySelector('.dropdown');
const dropdownKitchen = document.querySelector('.dropdown__kitchen');
const dropdownArrow = document.querySelector(".dropdown__arrow");
const kitchen = document.querySelector('.kitchen');

dropdown.addEventListener('click', () => {
  dropdownArrow.classList.toggle('expanded');
  kitchen.classList.toggle('qwerty');
  dropdownKitchen.classList.toggle('qwerty');
});

