// Carousel Animation
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(track.children);
  const speed = 3; // The Carousel Speed
  let trackLeft = 0;

  function animate() {
    trackLeft -= speed;

    const firstItem = track.firstElementChild;
    const firstItemWidth = firstItem.offsetWidth + 80;
    if (Math.abs(trackLeft) >= firstItemWidth) {
      track.appendChild(firstItem);
      trackLeft += firstItemWidth;
    }

    track.style.transform = `translateX(${trackLeft}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
