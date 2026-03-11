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

// Fake Ads
const adNull = 
{
    image: "images/ads/null.png",
    type: "external",
    target: ""
}

const adTallNull = 
{
    image: "images/ads/nulltall.png",
    type: "external",
    target: ""
}

const ads = [
  {
    image: "images/ads/moss.png",
    type: "external",
    target: "https://youtu.be/7qLZFNoMrcE?si=PTY89XVwvluScrNh"
  },
  {
    image: "images/ads/bubbletransformer.png",
    type: "iframe",
    target: "bfdi-cards.html"
  },
  {
    image: "images/ads/nonslipshoessoha.png",
    type: "iframe",
    target: "bfdi-cards.html"
  },
  {
    image: "images/ads/grimblygardenfree.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/ads/makeyoucrumb.png",
    type: "external",
    target: "https://minecraft.wiki/w/Cookie"
  },
  {
    image: "images/ads/revolutionaryearmuffs.png",
    type: "iframe",
    target: "bfdi-cards.html"
  },
  {
    image: "images/ads/clickthisad.png",
    type: "external",
    target: "https://ko-fi.com/baisylia"
  },
  {
    image: "images/ads/thiswillkillyou.png",
    type: "external",
    target: "https://ko-fi.com/baisylia"
  },
  {
    image: "images/ads/haveyouseenher.png",
    type: "external",
    target: "https://ko-fi.com/baisylia"
  },
  {
    image: "images/ads/9of10doctors.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/ads/1of10doctors.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/ads/revolutionaryheadphones.png",
    type: "iframe",
    target: "bfdi-cards.html"
  }
];

const adsTall = [
  {
    image: "images/ads/singlegrimblies1.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/ads/singlegrimblies2.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/ads/singlegrimblies3.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/ads/singlegrimblies4.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/ads/singlegrimblies5.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/ads/singlegrimblies6.png",
    type: "iframe",
    target: "grimbly-garden.html"
  },
  {
    image: "images/ads/spamtoninvest.png",
    type: "external",
    target: "https://ko-fi.com/baisylia"
  },
  {
    image: "images/ads/tennatvtime.png",
    type: "iframe",
    target: "liked-media.html"
  }
];

function randomOrNull(pool, nullAd) {
  if (Math.random() < 0.5) {
    return nullAd; 
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

function createAd(ad, type) {
  const img = document.createElement("img");
  img.src = ad.image;
  img.className = "fake-ad " + type;

  if (ad.target) {
    img.onclick = () => {
      soundPress();

      if (ad.type === "iframe") {
        loadPage(ad.target);
      } else if (ad.type === "external") {
        openInNewTab(ad.target);
      }
    };
  } else {
    img.style.cursor = "default";
    img.style.pointerEvents = "none";
  }

  return img;
}

function populateAds() {
  const left = document.getElementById("leftAds");
  const right = document.getElementById("rightAds");

  left.innerHTML = "";
  right.innerHTML = "";

  left.appendChild(createAd(randomOrNull(ads, adNull), "ad-normal"));
  right.appendChild(createAd(randomOrNull(ads, adNull), "ad-normal"));

  left.appendChild(createAd(randomOrNull(adsTall, adTallNull), "ad-tall"));
  right.appendChild(createAd(randomOrNull(adsTall, adTallNull), "ad-tall"));
}

document.addEventListener("DOMContentLoaded", () => {
  populateAds();
  setInterval(populateAds, 20000);
});