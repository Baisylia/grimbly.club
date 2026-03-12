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
    target: "bfdi-cards.html"
  },
  {
    image: "images/coolimages/nonslipshoessoha.png",
    type: "iframe",
    target: "bfdi-cards.html"
  },
  {
    image: "images/coolimages/grimblygardenfree.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/coolimages/makeyoucrumb.png",
    type: "external",
    target: "https://minecraft.wiki/w/Cookie"
  },
  {
    image: "images/coolimages/revolutionaryearmuffs.png",
    type: "iframe",
    target: "bfdi-cards.html"
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
    type: "external",
    target: "https://ko-fi.com/baisylia"
  },
  {
    image: "images/coolimages/9of10doctors.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/coolimages/1of10doctors.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/coolimages/revolutionaryheadphones.png",
    type: "iframe",
    target: "bfdi-cards.html"
  },
  {
    image: "images/coolimages/imold.png",
    type: "external",
    target: "https://youtu.be/7qLZFNoMrcE?si=PTY89XVwvluScrNh"
  },
  {
    image: "images/coolimages/blocky.png",
    type: "iframe",
    target: "bfdi-cards.html"
  },
  {
    image: "images/coolimages/woody.png",
    type: "iframe",
    target: "bfdi-cards.html"
  },
  {
    image: "images/coolimages/rffree.png",
    type: "iframe",
    target: "raspberry-flavoured.html"
  },
  {
    image: "images/coolimages/rffree2.png",
    type: "iframe",
    target: "raspberry-flavoured.html"
  },
  {
    image: "images/coolimages/grimblymerch.png",
    type: "iframe",
    target: "grimbly-garden.html"
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
    target: "grimbly-garden.html"
  },
  {
    image: "images/coolimages/singlegrimblies2.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/coolimages/singlegrimblies3.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/coolimages/singlegrimblies4.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/coolimages/singlegrimblies5.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/coolimages/singlegrimblies6.png",
    type: "iframe",
    target: "grimbly-garden.html"
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
    target: "raspberry-flavoured.html"
  },
  {
    image: "images/coolimages/rfpack2.png",
    type: "iframe",
    target: "raspberry-flavoured.html"
  },
  {
    image: "images/coolimages/rfpack3.png",
    type: "iframe",
    target: "raspberry-flavoured.html"
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