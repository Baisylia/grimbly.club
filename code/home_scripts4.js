// Carousel Animations
document.addEventListener("DOMContentLoaded", () => {
  // Grimblies
  const track = document.querySelector(".carousel-track");
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

  // Animate Track
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



  // Media
  const trackM = document.querySelector(".media-carousel-track");

  let trackLeftM = 0;

  // Animate Track
  function animateM() {
    const firstItemM = trackM.firstElementChild;
    const firstItemWidthM = getItemWidth(firstItemM);

    const speedM = ((firstItemWidthM / 75) * (speedFactor / 100)) * 0.4;
    trackLeftM -= speedM;

    if (Math.abs(trackLeftM) >= firstItemWidthM) {
      trackM.appendChild(firstItemM);
      trackLeftM += firstItemWidthM;
    }

    trackM.style.transform = `translateX(${trackLeftM}px)`;
    requestAnimationFrame(animateM);
  }

  animateM();
});
