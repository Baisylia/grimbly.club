// Load a Page
function loadPage(page){
    const frame = document.querySelector(".content-frame");
    frame.src = page;
}

// Button Sound
function soundPress() {
  const sound = document.getElementById("button-sound");
  sound.play();
}

// Speed Slider
document.addEventListener("DOMContentLoaded", () => {

    const slider = document.getElementById("speedSlider");

    function sendSpeedToIframes() {
        const speed = parseInt(slider.value, 10);

        document.querySelectorAll("iframe").forEach(frame => {
            if (frame.contentWindow) {
                frame.contentWindow.postMessage({ speed: speed }, "*");
            }
        });
    }

    slider.addEventListener("input", sendSpeedToIframes);

    document.querySelectorAll("iframe").forEach(frame => {
        frame.addEventListener("load", sendSpeedToIframes);
    });

});