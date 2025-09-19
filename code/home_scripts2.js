// Carousel Animation
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(track.children);

  let trackLeft = 0;

  function getItemWidth(item) {
    const styles = window.getComputedStyle(item);
    const marginLeft = parseInt(styles.marginLeft, 10);
    const marginRight = parseInt(styles.marginRight, 10);
    return item.offsetWidth + marginLeft + marginRight;
  }

  function animate() {
    const firstItem = track.firstElementChild;
    const firstItemWidth = getItemWidth(firstItem);

    const speed = firstItemWidth / 75; 
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
