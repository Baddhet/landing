const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carousel = document.querySelector('.carousel ul');
const widthImg = document.querySelector('.carousel ul>li>img').offsetWidth;
const numberOfPictures = document.querySelectorAll('.carousel ul>li>img').length-1;
const allPictures = document.querySelectorAll('.carousel ul>li>img');
const widthWindow = window.innerWidth;
const lastPicturesPosition = -Math.abs( allPictures[numberOfPictures].offsetLeft) + widthWindow - widthImg;

let position = 0;
prev.addEventListener('click', () => {
  if (position >= 0 || position >= -Math.abs(widthImg) ) {
    position = 0;
  } else {
    position += widthImg;
  }
  carousel.style.transform = `translateX(${position}px)`;
});

next.addEventListener('click', () => {
  if (position <= lastPicturesPosition || position - widthImg <= lastPicturesPosition) {
    position = lastPicturesPosition;
  } else {
    position -= widthImg;
  }
  carousel.style.transform = `translateX(${position}px)`;
});