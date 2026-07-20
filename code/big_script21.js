// Page Updates
const pageUpdates = {
    "webmaster.html": 0,
    "support.html": 1,
    "projects.html": 1,
    "blog.html": 0,
    "media-games.html": 0,
    "spin-wheel.html": 0,
    "changelogs.html": 2,
    "collections-amy.html": 0,
    "credits.html": 0,
    "links.html": 0
};

document.addEventListener("DOMContentLoaded", ()=>{
    refreshUpdateIcons();
});
function refreshUpdateIcons(){
    document.querySelectorAll("[data-page]").forEach(button=>{
        const page = button.dataset.page;
        const currentRevision = pageUpdates[page] ?? 0;
        const seenRevision = parseInt(
            localStorage.getItem("seen_" + page) ?? -1
        );

        if(currentRevision > seenRevision){
            button.classList.add("button-update");
        }
        else{
            button.classList.remove("button-update");
        }
    });
}

window.addEventListener("load", () => {
    sendUpdatesToFrame();
});
document.getElementById("contentFrame")?.addEventListener("load", () => {
    sendUpdatesToFrame();
});
function sendUpdatesToFrame() {
    const iframe = document.getElementById("contentFrame");
    if (!iframe) return;
    iframe.contentWindow.postMessage({
        type: "updateStatus",
        updates: pageUpdates
    }, "*");
}

window.addEventListener("message", (event)=>{
    if(event.data.type === "requestUpdates"){
        event.source.postMessage({
            type: "updateStatus",
            updates: pageUpdates
        }, "*");
    }

    if(event.data.type === "pageOpened"){
        localStorage.setItem(
            "seen_" + event.data.page,
            pageUpdates[event.data.page] ?? 0
        );

        refreshUpdateIcons();
    }
});
function markPageSeen(page){
    if(pageUpdates[page] === undefined){
        return;
    }
    localStorage.setItem(
        "seen_" + page,
        pageUpdates[page]
    );
    refreshUpdateIcons();
}


// Music
document.addEventListener("DOMContentLoaded", () => {

  const music = document.getElementById("bgMusic");
  const volumeSlider = document.getElementById("musicVolume");
  const toggleButton = document.getElementById("musicToggle");

  if (!music) return;

  const savedVolume = localStorage.getItem("musicVolume");
  if (savedVolume !== null) {
    music.volume = parseFloat(savedVolume);
    if (volumeSlider) volumeSlider.value = savedVolume;
  } else {
    music.volume = 0.4;
  }

  const savedTime = localStorage.getItem("musicTime");
  if (savedTime) music.currentTime = parseFloat(savedTime);
  const savedPaused = localStorage.getItem("musicPaused");
  if (savedPaused === "true") {
    music.pause();
    localStorage.setItem("musicPaused", "true");
    toggleButton.querySelector("span").textContent = "Play Music";
    toggleButton.querySelector("img").src = "images/buttons/musicoff.png";
  }

  setInterval(() => {
    localStorage.setItem("musicTime", music.currentTime);
  }, 2000);

  if (volumeSlider) {
    volumeSlider.addEventListener("input", () => {
      music.volume = volumeSlider.value;
      localStorage.setItem("musicVolume", volumeSlider.value);
    });
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      soundPress();

      if (music.paused) {
        music.play();
        localStorage.setItem("musicPaused", "false");
        toggleButton.querySelector("span").textContent = "Pause Music";
        toggleButton.querySelector("img").src = "images/buttons/music.png";
      } else {
        music.pause();
        localStorage.setItem("musicPaused", "true");
        toggleButton.querySelector("span").textContent = "Play Music";
        toggleButton.querySelector("img").src = "images/buttons/musicoff.png";
      }
    });
  }

  document.addEventListener("click", () => {
    const paused = localStorage.getItem("musicPaused");
    if (paused !== "true") music.play();
  }, { once: true });
});

// Load a Page
function loadPage(page){
    const frame = document.querySelector(".content-frame");
    frame.src = page;
    localStorage.setItem("currentPage", page);

    markPageSeen(page);
}

// Button Sound
function soundPress() {
  const sound = document.getElementById("button-sound");
  sound.play();
}

// Navigate
function navigate(page) {
  setTimeout(() => {
    window.location.href = page;
  }, 100);
}

// Open New Tab
function openInNewTab(url) {
  window.open(url, '_blank').focus();
}

// Paragraph Button
function textButtonPress(textId) {
  var moreText = document.getElementById(textId);
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
  } else {
    moreText.style.display = "none";
  }
}

// Main Iframe (Not Sure RN)
/*document.addEventListener("DOMContentLoaded", () => {
    const frame = document.querySelector(".content-frame");
    const savedPage = localStorage.getItem("currentPage");

    if (frame && savedPage) {
        frame.src = savedPage;
    }
});*/

// Speed Slider
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("speedSlider");
    if (!slider) return;

    const savedSpeed = localStorage.getItem("carouselSpeed");
    if (savedSpeed !== null) {
        slider.value = savedSpeed;
    }

    function sendSpeedToIframes() {
        const speed = parseInt(slider.value, 10);

        document.querySelectorAll("iframe").forEach(frame => {
            if (frame.contentWindow) {
                frame.contentWindow.postMessage({ speed: speed }, "*");
            }
        });
    }

    slider.addEventListener("input", () => {
        localStorage.setItem("carouselSpeed", slider.value);
        sendSpeedToIframes();
    });

    document.querySelectorAll("iframe").forEach(frame => {
        frame.addEventListener("load", sendSpeedToIframes);
    });

    sendSpeedToIframes();
});

// Random Page
function randomPage() {
  const pages = [
    "blog.html",
    "changelogs.html",
    "collections-amy.html",
    "collections-bfdi.html",
    "collections-figures.html",
    "credits.html",
    "links.html",
    "media-games.html",
    "media-music.html",
    "media-shows-the-owl-house.html",
    "media-shows.html",
    "mods-alternate-timeline.html",
    "mods-null-end-void.html",
    "projects.html",
    "support.html",
    "webmaster.html",  
  ];

  const random = pages[Math.floor(Math.random() * pages.length)];
  soundPress();
  loadPage(random);
}

// Cool Images
const coolimageNull = 
{
    image: "images/coolimages/null.png",
    type: "external",
    target: ""
}

const coolimageTallNull = 
{
    image: "images/coolimages/nulltall.png",
    type: "external",
    target: ""
}

let coolimages = [];
let coolimagesTall = [];

async function loadCoolImages(){
    const response = await fetch("code/data/cool-images.json",{cache:"no-store"});
    const data = await response.json();
    coolimages = data.small;
    coolimagesTall = data.tall;
    populateCoolImages();
}


function randomOrNull(pool, nullAd) {
  if (Math.random() < 0.5) {
    return nullAd; 
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

function createCoolImage(coolimage, type) {
  const img = document.createElement("img");
  img.src = coolimage.image;
  img.className = "fake-coolimage " + type;

  if (coolimage.target) {
    img.onclick = () => {
      soundPress();

      if (coolimage.type === "iframe") {
        loadPage(coolimage.target);
      } else if (coolimage.type === "external") {
        openInNewTab(coolimage.target);
      }
    };
  } else {
    img.style.cursor = "default";
    img.style.pointerEvents = "none";
  }

  return img;
}

function populateCoolImages() {
  const left = document.getElementById("leftCoolImages");
  const right = document.getElementById("rightCoolImages");

  left.innerHTML = "";
  right.innerHTML = "";

  left.appendChild(createCoolImage(randomOrNull(coolimages, coolimageNull), "coolimage-normal"));
  right.appendChild(createCoolImage(randomOrNull(coolimages, coolimageNull), "coolimage-normal"));

  left.appendChild(createCoolImage(randomOrNull(coolimagesTall, coolimageTallNull), "coolimage-tall"));
  right.appendChild(createCoolImage(randomOrNull(coolimagesTall, coolimageTallNull), "coolimage-tall"));
}

document.addEventListener("DOMContentLoaded", () => {
  loadCoolImages();
  loadSplashes();

  setInterval(() => {
    loadCoolImages();
    loadSplashes();
  }, 20000);
});

// Random Splashes
let commonSplashes = [];
let uncommonSplashes = [];
let rareSplashes = [];
let secretSplashes = [];

async function loadSplashes(){
    const response = await fetch("code/data/splashes.json",{cache:"no-store"});
    const data = await response.json();
    commonSplashes = data.common;
    uncommonSplashes = data.uncommon;
    rareSplashes = data.rare;
    secretSplashes = data.secret;
    setRandomSplash();
}

function setRandomSplash() { 
  let splash;
  const splashy = document.getElementById("splashText");
  const roll = Math.random();

  if (roll < 0.01) {
    splash = secretSplashes[Math.floor(Math.random() * secretSplashes.length)];
    splashy.style.color = "#f8f271";
  } 
  else if (roll < 0.1) {
    splash = rareSplashes[Math.floor(Math.random() * rareSplashes.length)];
    splashy.style.color = "#f685a9";
  } 
  else if (roll < 0.2) {
    splash = uncommonSplashes[Math.floor(Math.random() * uncommonSplashes.length)];
    splashy.style.color = "#78eaf1";
  } 
  else {
    splash = commonSplashes[Math.floor(Math.random() * commonSplashes.length)];
    splashy.style.color = "#778899";
  }

  splashy.textContent = splash;
}

document.addEventListener("DOMContentLoaded", () => {
  const splashy = document.getElementById("splashText");

  if (splashy) {
    splashy.addEventListener("click", () => {
      soundPress(); 
      setRandomSplash();
    });
  }
});