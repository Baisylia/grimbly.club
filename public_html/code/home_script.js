// Carousel Animation
const carouselImages = document.querySelectorAll('.carousel-img');
carouselImages.forEach((img, index) => {
  const imgNumber = index + 1;
  img.classList.add(`carousel-img${imgNumber}`);
  img.addEventListener('animationiteration', () => {
    img.style.right = '100%';
  });
});