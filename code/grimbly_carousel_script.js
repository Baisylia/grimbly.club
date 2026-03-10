window.speedFactor = 75; // default speed

// listen for messages from parent
window.addEventListener("message", (event) => {
    if (event.data.speed !== undefined) {
        window.speedFactor = event.data.speed;
    }
});

window.addEventListener("load", () => {
    const track = document.querySelector(".carousel-track");
    if (!track) return console.error("Carousel track not found");

    let trackLeft = 0;

    function getItemWidth(item) {
        const styles = window.getComputedStyle(item);
        const marginLeft = parseInt(styles.marginLeft, 10);
        const marginRight = parseInt(styles.marginRight, 10);
        return item.offsetWidth + marginLeft + marginRight;
    }

    function animate() {
        const firstItem = track.firstElementChild;
        if (!firstItem) return requestAnimationFrame(animate);

        const firstItemWidth = getItemWidth(firstItem);
        const speed = (firstItemWidth / 75) * (window.speedFactor / 100);

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