// Carousel Animation
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(track.children);
  const speedSlider = document.getElementById("speedSlider");

  let trackLeft = 0;
  let speedFactor = parseInt(speedSlider.value, 10);

  // Listen for Slider Changes
  speedSlider.addEventListener("input", () => {
    speedFactor = parseInt(speedSlider.value, 10);
  });

  function getItemWidth(item) {
    const styles = window.getComputedStyle(item);
    const marginLeft = parseInt(styles.marginLeft, 10);
    const marginRight = parseInt(styles.marginRight, 10);
    return item.offsetWidth + marginLeft + marginRight;
  }

  function animate() {
    const firstItem = track.firstElementChild;
    const firstItemWidth = getItemWidth(firstItem);

    const speed = (firstItemWidth / 75) * (speedFactor / 100);
    trackLeft -= speed;

    if (Math.abs(trackLeft) >= firstItemWidth) {
      track.appendChild(firstItem);
      trackLeft += firstItemWidth;
    }

    track.style.transform = `translateX(${trackLeft}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
