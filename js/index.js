// ------------------------section games-----------------------------------

// https://yandex.ru/search/?text=%D0%BA%D0%B0%D1%80%D1%83%D1%81%D0%B5%D0%BB%D1%8C-%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D1%8E%2C+%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8F+%D0%BC%D0%B5%D0%BD%D1%8F%D0%B5%D1%82%D1%81%D1%8F+%D0%BF%D1%80%D0%B8++%D0%BD%D0%B0%D0%B6%D0%B0%D1%82%D0%B8%D0%B8+%D0%BD%D0%B0+%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D1%83%2C+%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F+js.+%D0%9B%D0%B5%D0%B3%D0%BA%D0%B8%D0%B9+%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1+%D0%B4%D0%BB%D1%8F+%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8E%D1%89%D0%B5%D0%B3%D0%BE&neuro_dialog_id=shared%2F9553-d60e-4b75-77dd

// const carouselContainer = document.querySelector('.carousel-container');
// const slides = document.querySelectorAll('.slide');
// const nextButton = document.getElementById('next');
// let currentIndex = 0;

// function showSlide(index) {
//   // slides.forEach(item => item.style.display = 'none');
//   slides[index].style.display = 'block';
// }

// nextButton.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % slides.length;
//   showSlide(currentIndex);
// });

// showSlide(currentIndex);


const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slides[0].offsetWidth;
  carouselContainer.scrollTo({
    left: index * slideWidth,
    behavior: 'smooth'
  });
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);

// ------------------------section -------------------------------
