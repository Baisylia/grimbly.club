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
    "blog-ethics.html",
    "blog-main.html",
    "blog-minecraft-mods.html",
    "blog-minecraft-updates.html",
    "changelogs.html",
    "collections-amy.html",
    "collections-bfdi.html",
    "collections-figures.html",
    "credits.html",
    "games-bfdi-cards.html",
    "games-grimbly-garden.html",
    "games-grimbly-schmeggle.html",
    "games-last-card.html",
    "games-terralink-mini.html",
    "games.html",
    "info.html",
    "links.html",
    "media-games.html",
    "media-music.html",
    "media-shows-the-owl-house.html",
    "media-shows.html",
    "mods-alternate-timeline.html",
    "mods-bfdi-mod.html",
    "mods-cooks-collection.html",
    "mods-cultural-delights.html",
    "mods-modest-magic.html",
    "mods-modest-mining.html",
    "mods-null-end-void.html",
    "mods-raspberry-flavoured.html",
    "mods.html",
    "support.html",
    "webmaster.html",  ];

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

const coolimages = [
  {
    image: "images/coolimages/moss.png",
    type: "external",
    target: "https://youtu.be/Z8jIhM-xYoU?si=9wKKVyaI4dHvcFHi"
  },
  {
    image: "images/coolimages/bubbletransformer.png",
    type: "iframe",
    target: "collections-bfdi.html"
  },
  {
    image: "images/coolimages/nonslipshoessoha.png",
    type: "iframe",
    target: "collections-bfdi.html"
  },
  {
    image: "images/coolimages/grimblygardenfree.png",
    type: "iframe",
    target: "games-grimbly-garden.html"
  },
  {
    image: "images/coolimages/makeyoucrumb.png",
    type: "external",
    target: "https://minecraft.wiki/w/Cookie"
  },
  {
    image: "images/coolimages/revolutionaryearmuffs.png",
    type: "iframe",
    target: "games-bfdi-cards.html"
  },
  {
    image: "images/coolimages/clickthiscoolimage.png",
    type: "external",
    target: "https://ko-fi.com/baisylia"
  },
  {
    image: "images/coolimages/thiswillkillyou.png",
    type: "external",
    target: "https://ko-fi.com/baisylia"
  },
  {
    image: "images/coolimages/haveyouseenher.png",
    type: "iframe",
    target: "collections-amy.html"
  },
  {
    image: "images/coolimages/9of10doctors.png",
    type: "iframe",
    target: "games-grimbly-garden.html"
  },
  {
    image: "images/coolimages/1of10doctors.png",
    type: "iframe",
    target: "games-grimbly-garden.html"
  },
  {
    image: "images/coolimages/revolutionaryheadphones.png",
    type: "iframe",
    target: "games-bfdi-cards.html"
  },
  {
    image: "images/coolimages/imold.png",
    type: "external",
    target: "https://youtu.be/7qLZFNoMrcE?si=PTY89XVwvluScrNh"
  },
  {
    image: "images/coolimages/blocky.png",
    type: "iframe",
    target: "games-bfdi-cards.html"
  },
  {
    image: "images/coolimages/woody.png",
    type: "iframe",
    target: "games-bfdi-cards.html"
  },
  {
    image: "images/coolimages/rffree.png",
    type: "iframe",
    target: "mods-raspberry-flavoured.html"
  },
  {
    image: "images/coolimages/rffree2.png",
    type: "iframe",
    target: "mods-raspberry-flavoured.html"
  },
  {
    image: "images/coolimages/grimblymerch.png",
    type: "iframe",
    target: "games-grimbly-garden.html"
  },
  {
    image: "images/coolimages/brothers.png",
    type: "iframe",
    target: "webmaster.html"
  },
  {
    image: "images/coolimages/what.png",
    type: "iframe",
    target: "home.html"
  },
  {
    image: "images/coolimages/thrashmachine.png",
    type: "iframe",
    target: "media-games.html"
  },
  {
    image: "images/coolimages/nowifegame.png",
    type: "iframe",
    target: "media-games.html"
  },
  {
    image: "images/coolimages/owlladyhumanwanted.png",
    type: "iframe",
    target: "media-shows-the-owl-house.html"
  },
  {
    image: "images/coolimages/deltoid.png",
    type: "external",
    target: "https://ko-fi.com/baisylia"
  }
];

const coolimagesTall = [
  {
    image: "images/coolimages/singlegrimblies1.png",
    type: "iframe",
    target: "games-grimbly-garden.html"
  },
  {
    image: "images/coolimages/singlegrimblies2.png",
    type: "iframe",
    target: "games-grimbly-garden.html"
  },
  {
    image: "images/coolimages/singlegrimblies3.png",
    type: "iframe",
    target: "games-grimbly-garden.html"
  },
  {
    image: "images/coolimages/singlegrimblies4.png",
    type: "iframe",
    target: "games-grimbly-garden.html"
  },
  {
    image: "images/coolimages/singlegrimblies5.png",
    type: "iframe",
    target: "games-grimbly-garden.html"
  },
  {
    image: "images/coolimages/singlegrimblies6.png",
    type: "iframe",
    target: "games-grimbly-garden.html"
  },
  {
    image: "images/coolimages/spamtoninvest.png",
    type: "external",
    target: "https://ko-fi.com/baisylia"
  },
  {
    image: "images/coolimages/tennatvtime.png",
    type: "iframe",
    target: "media-games.html"
  },
  {
    image: "images/coolimages/starwalker.png",
    type: "iframe",
    target: "media-games.html"
  },
  {
    image: "images/coolimages/chairs.png",
    type: "external",
    target: "https://ko-fi.com/baisylia"
  },
  {
    image: "images/coolimages/rfpack.png",
    type: "iframe",
    target: "mods-raspberry-flavoured.html"
  },
  {
    image: "images/coolimages/rfpack2.png",
    type: "iframe",
    target: "mods-raspberry-flavoured.html"
  },
  {
    image: "images/coolimages/rfpack3.png",
    type: "iframe",
    target: "mods-raspberry-flavoured.html"
  },
  {
    image: "images/coolimages/peachy.png",
    type: "iframe",
    target: "webmaster.html"
  },
  {
    image: "images/coolimages/sparky.png",
    type: "iframe",
    target: "webmaster.html"
  },
  {
    image: "images/coolimages/owlhousebook.png",
    type: "external",
    target: "https://www.penguinrandomhouse.com/books/804037/the-long-lived-king-an-original-the-owl-house-graphic-novel-by-dana-terrace-mikki-crisostomo/"
  },
  {
    image: "images/coolimages/amitygay.png",
    type: "iframe",
    target: "media-shows-the-owl-house.html"
  },
  {
    image: "images/coolimages/edashorrorhouse.png",
    type: "iframe",
    target: "media-shows-the-owl-house.html"
  }
];

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
  populateCoolImages();
  setInterval(populateCoolImages, 20000);
});