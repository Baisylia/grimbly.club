window.speedFactor = 75; 

window.addEventListener("message", (event) => {
    if (event.data.speed !== undefined) {
        window.speedFactor = event.data.speed;
    }
});

window.addEventListener("load", () => {

    const track = document.querySelector(".media-carousel-track");
    if (!track) {
        console.error("Media carousel track not found");
        return;
    }

    let trackLeft = 0;

    function getItemWidth(item) {
        const styles = window.getComputedStyle(item);
        const marginLeft = parseInt(styles.marginLeft, 10);
        const marginRight = parseInt(styles.marginRight, 10);
        return item.offsetWidth + marginLeft + marginRight;
    }

    function animate() {

        const firstItem = track.firstElementChild;
        if (!firstItem) {
            requestAnimationFrame(animate);
            return;
        }

        const firstItemWidth = getItemWidth(firstItem);

        const speed = ((firstItemWidth / 75) * (window.speedFactor / 100)) * 0.4;

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