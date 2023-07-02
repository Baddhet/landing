const dropdown = document.querySelectorAll('.dropdown');
const calcDropdown = document.querySelectorAll('.calc__dropdown');
const dropdownArrow = document.querySelectorAll(".dropdown__arrow");

for (let index = 0; index < dropdown.length; index++) {
  const element = dropdown[index];
  dropdown[index].addEventListener('click', () => {
    dropdownArrow[index].classList.toggle('expanded');
    calcDropdown[index].classList.toggle('qwerty');
  });
}


