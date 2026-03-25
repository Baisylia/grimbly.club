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
  setRandomSplash();

  setInterval(() => {
    populateCoolImages();
    setRandomSplash();
  }, 20000);
});

// Random Splashes
const commonSplashes = [
  // Misc
  "Click the ads!",
  "Donate to the Ko-Fi!",
  "Made by Baisylia!",
  "That toadour will kill you!",
  "Contains high levels of gay!",
  "Contains high levels of autism!",
  "Message Baisylia splash ideas!",
  "Message Baisylia ad ideas!",
  "There are grimblies in your area!",
  "Baisylia loves raspmary!",
  "raspmary is the best!",
  ":3",
  ">:3",
  "To be cringe is to be free!",
  "Only and all AI content is slop!",
  "G!",
  "Stop eating shrimps with wimps and eat lobster with a monster!" ,
  "This splash only has a small chance to appear!",
  "No grimblies were harmed in the making of this site!",
  "Donate all your kromer!",
  "Greb bag!",
  "Never underestimate a grebbie!",
  "Grebbies are cats!",
  "*Greebs at you grebbingly*",
  "JPXFRD",
  "Most splashes have exclamation marks.",
  "The circle, star, and heart icons are grimbly.club's secondary mascots!",
  "grimbly.club",
  "These splashes change every 20 seconds!",
  "Open settings to modify the carousel speeds!",
  "Open settings to modify the music volume!",
  "Grimblies are precious and must be protected!",
  "hweeeeeeeeeee",
  "hwaaaaaaaaaaa",
  "Boop!",
  "Click this splash to randomise it!",
  "Never bring up Mary milk!",
  "I specifically wanted you, random stranger, to not have fun!",
  "Peace and prosperity? I thought you said please remove parity!",
  "qwertyuiopasdfghjklzxcvbnm1234567890",
  "*Explodes pancakes with mind*",
  "Are you even reading these?",
  "It's like he's in some king of... SNOWGRAVE!",
  "Kris, as you know I am very HOMOPHOBIC!",
  "1.16 was the best update!",
  "15/02/2024 <3",
  "No detour!",
  "Is Theo home?",
  "You know how that word makes me feel!",
  "9/10 doctors recommend coming to grimbly.club every day and reading all the pages and pinning that tab and-",
  "I'm dying cause I'm an asparagus!",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!",
  "I HATE THE FLOOR! I'm fine.",
  
  // Play My Stuff
  "Play with Cultural Delights!",
  "Play with Cook's Collection!",
  "Play Modest Mining!",
  "Play Raspberry Flavoured!",
  "Play the Grimbly Garden prototype!",

  // Sonic Fan-Dubs
  "There goes Hawaii, the island is gone!",
  "Well it was a whole dream- BYE!",
  "Ha ha ha, one!",
  "I'm pissing on the moon!",
  "I was gay before the light!",
  "Is that what a house looks like?",
  "I miss my wife Tails, I miss her a lot. I'll be back.",
  "W h a t ? Now I know that sounds bad...",

  // Sonic
  "This is like taking candy from a baby, which is fine by me!",
  "All's well that ends well!",
  "With a stroke of luck you could become a monster truck, so grab that power up!",
  "Let the speed mend it!",
  "I am all of me!",
  "Follow me inside, outside, through the stratosphere!",
  "The moon is shining for you, it knows that I adore you!",
  "Forget your balls!",
  "Chaos control!",
  "I'm hanging on to the other side, I won't give up til' the end of me!",
  "You'll find your flame!",
  "Now here we go, it's the end of the show, hear them they're calling your name!",
  "Will the whole world know your name?",
  "Break through it all!",
  "I'm here, reaching far beyond these new frontiers!",
  "Can you hear the spirits sing?",
  "Now I'm not alone, a family of my own, I get to come home to you!",

  // The Quest For Cheese
  "I wish I could fly!",
  "That's nacho cheese, it's my cheese!",
  "I'm not dabbing, I'm looking at the floor for cheese!",
  "My dog is dead!",
  "We found the cheese, it's time to consume!",
  "This table has taken me hostage and I don't know how to leave lads!",
  "I have consumed ketamine and am going to die!",
  "What do you mean there's no cheese?",
  "Evening Gromit!",

  // The Ben 10 video games are actually hilarious
  "Electric slam-a-roo!",
  "spidermonkeyspidermonkeyspidermonkeyspidermonkeyspidermonkeyspidermonkey",
  "You fight evil, stop powerful bad guys, You fight evil, stop powerful bad guys,",
  "Humu- Humu- Humu- Humu- Humu- Humu- Humuu- Humu- Humu- Humu- Humu- Humu-",
  "ben 10 come into your room at night and put pringle chip in your ps2 memory card slot",

  // Kart Racing Brain Rot
  "Well what if they make a really big purchase...",
  "God damnit, I made another ARG!",
  "Pride means gay?",
  "Water vs. Mall, the age old question!",
  "Mall can have it's 5 minutes of fame, but when the chips are down, water's coming out on top",
  "Who won the star war?",
  "Mall wins for now!",
  "I was really taking inspiration from the classic debate of mall vs. water!",
  "This is where I live!",
  "Like and subscribe so I don't get EXE-ed!",
  "And then, he EXE-ed his own mother...",
  "I'm too stuffed with your likes and comments!",
  "Like and subscribe to keep Maria alive!",
  "I am your first subscriber!",
  "The way that pikmin eat nectar I eat pikmin!",
  "You like breathing don't you Squidward!",
  "There's another cat? WTF is this??",
  "I'm too big, she's too...",
  "Good morning Sonic! I'm trying to find my friend Pizza Steve!",
  "I don't know, I just don't like her!",
  "This isn't you!",
  "Stop! Remember her! Remember our past together!",
  "I don't think we should fight!",
  "Suffice to say, I wouldn't invite her to my picnic!",
  "I'm getting some bad vibes from her Yogi!",
  "The island's going to blow up with YOU on it Boo-Boo!",
  "We go through a round!",

  // Rouge the Bat says THINGS... (Only First Few)
  "I like jewels!",
  "I love bottles of water!",
  "All the world's gems are mine to keep!",

  // Spongebob
  "It's just an ordinary- OH MY GOODNESS, SQUIDWARD!",
  "You like Krabby Patties don't you Squidward!",
  "Am I a pretty girl?",
  "YOU ARE GOING TO FINISH YOUR DESSERT, AND YOU ARE GOING TO LIKE IT!",

  // Phineas and Ferb,
  "These B.O.Y.S are just E.V.I.L!",
  "He's a semi-aquatic egg laying mammal of action!",
  "He's got more than just mad skill, he's got a beaver tail and a bill!",
  "He's got an iron will, nerves of steel, and several other metal themed attributes!",
  
  // Random References
  "I am a dwawf and I'm digging a hole!",
  "Gravity is a harness!",
  "Ew, that doesn't taste like a gusher!!",
  "Sure am glad I'm not that guy!",
  "Every shape has a different flavour, and every flavour has a different shape!",
  "I'm an expert just like you!",
  "You will be my girl, my girl, my girl, my girl... You will be my world, my world, my world, my world...",
  "You look so pretty and I love this view!",
  "There's a dead girl in the pool!",
  "My girl's made of peaches and soft grass and the moonlight!",
  "Sorry Connie I just can't deny that I'm a raging lesbian!",

  // Ben 10
  "It's hero time!",
  "Time to go hero!",
  "Stupid watch!",
  "I had not considered that fact!",
  "My car!!",
  "I sense I've made a mistake of some kind!",
  "Think like a galvan guys!",
  "This guy's the worst!",
  "You could even hurt my feelings if I had any!",
  "Let me tell you something Jarett of Pantophage! I just jumped down your throat!",
  "Eating babies is not cool!",
  "Let me tell you something new alien partner that I never wanted in the first place but I'm begrudgingly beginning to like in spite of myself!",
  "Let me tell you something new Omnitrix that keeps turning me into the wrong thing, you keep turning me into the wrong thing!",
  "Cousin, shield the others!",
  "Wall of sound!",
  "I've got all your powers plus my own! I'm Kevin Eleven!",
  "Turbo!",

  // Steven Universe
  "That's unusual!",
  "If you could only know, what we really are!",
  "I am made of love! And it's stronger than you!",
  "Is there anything that's worth more than peace and love on the planet Earth?",
  "Giant woman!",
  "Call me... lasagna!",
  "Cookie Cat! He's a pet for your tummy!",
  "Cookie Cat! He's super duper yummy!",
  "I can make a change!",
  "Gee, it's swell to finally meet her other friends!",
  "Can I make it up to you?",
  "Maybe I'll find myself sitting on that distant shore, maybe I'm not alone!",
  "Why do you have to look up to her, aside from in a literal sense?",
  "Don't you know that a power that big comes with a bigger expense!",
  "You do it for her, that is to say, you do it for him!",
  "Balance is the key!",
  "Fusion is just a cheap tactic to make weak gems stronger!",
  "I'm just a comet!",
  "Let me drive my van into your heart!",
  "We are the working dead!",
  "I'd really rather be eating your brains!",
  "Why can't you let yourself just be wherever you are?",
  "Haven't you noticed that I'm a star?",
  "Now everyone can see me burning!",
  "Happily ever after here we are!",
  "Happily ever after there we were!",
  "It all makes sense now!",
  "They may not know who they are but we do!",
  "I'm a traitorous clod!",
  "You lumpy clumpy clods!",
  "What do you know about the Earth!",
  "I've felt worse.",
  "Now that's two stones, with one bird!",

  // The Town Inside Me
  "It's my stress that's for sure!",
  "I hate the alarm clock I chose!",
  "Tastes like vegetables I don't like!",
  "I'm not waiting for Santa Claus!",
  "I already have the gifts just can't open the box!",
  "I've had a gray haze for a long time though!",
  "I can't go home because I'm afraid something will change!",
  "I can feel the light even after the sun goes down!",

  // Tom Cardy
  "Everybody seems to forget how they felt last time they got the big breakfast!",
  "Eggs, bacon, hashed brown, baked beans, another hashed brown, sausage, toast, regret!",
  "Saying business before another word doesn't make the whole thing business related!",
  "You've got a beautiful mind!",
  "Dolphins dressed in monocles with tiny tophats that cover up their blowholes!",
  "Clouds with faces but they're upside down so it looks like their rain is hair!",
  "Santa Claus going down a chimney but the chimney is a cigarette and the house is a man!",
  "Bowling balls made out of peanut butter but they're the bubbles in a big rubbеr hubba bubba bubble bath!",
  "Doctor holding a big bottle of tonic but the bottle's full of rings and the doctor is Sonic!",
  "Jimmy Fallon with a hat on!",
  "Man full of jelly but the jelly full of ham!",
  "Baby with two wheels instead of hands!",
  "Beagles eating bugles while a poodle plays the flugelhorn!",
  "Horny foreman foraging for mushrooms in an ice storm!",
  "Big pies with big eyes and big thighs!",
  "Anaconda in a condescending disguise!",
  "Sandra Bullock, specifically from Speed 2!",
  "Fighting with my best friend's aunt at a barbecue!",
  "A frog doing his taxes while he sits on a swing!",
  "I can see my destiny, and a bear learning how to water ski",
  "I see the past and the future as one, also a honey bee holding a gun",
  "Fourteen gerbils in a kiddie pool!",
  "Robot crying softly on a barstool!",
  "Santa's elves unionize the North Pole!",
  "Gimli locking lips with a cute troll!",
  "A lawyer and a barber barter baubles underwater and the lawyer and the barber disagree on the fee!",
  "And that's a beautiful tree- I don't see a tree.",
  "What do you see? You and me!",
  "We can see through space and time, and a bunch of clowns beating up a mime!",
  "We see our hearts and minds start to unite, also a farting guy flying a kite!",
  "Leeroy 'Two Gun' Jenkins thought that he could surely win, but before Leeroy could blink, he was told to sit and spin!",
  "The Mongoose Mountain Gang played dirty with a twenty man crew, but tales are told that Joe grew eighteen arms that day as a gift from Vishnu",
  "Seven dollars fifty for a large soy cappuccino?",
  "Even though I'm not with Amazon, you're calling me to tell me that my profile has been hacked?",
  "You wanna refund the money that I spent in your shop with a store credit?",
  "Everybody brought a platter to my fancy birthday dinner but you brought soda water?",
  "I heard he was born in a fire and rides a pair of flamin' birds!",
  "You been tellin' everybody I'm a deadbeat daddy, didn't know I tried to save ya?",
  "Now I found my father and I learned the truth we can be reunited?",
  "So this is your house is it?",
  "Stop it now, this is too niche a content!",
  "Everybody wants to change with a two week course!",
  "He's a big bad dog from the BBC and he won't break eye contact with a Nazi!",
  "You're in charge, you can do it, just get Louis Theroux it",
  "Hey nice shirt asshole!",
  "Step 1: Ask a question, make it surprisingly genuine!",
  "Step 2: Don't react, don't retract but don't attack!",
  "There's only one rule from here on out, keep eye contact!",
  "Make sure that you are the one that's staring at them in their dreams!",
  "Upon invading the dreams of my most recent victim I'd begun to feel my host body had become quarrelsome and resistant!",
  "No! No beginning to feel, no reflective gonzo journalism, and no demonic posession!",
  "There is no pain. NO HURT. There can be no suffering if there is only Louis!",
  "Silence mortal!",
  "I was beginning to feel.. omnipotent!",
  "Deal with conflict, treat them kind! Hold their soul, and bend their mind!",
  "You can set up your own rhyme when you see through all space and time!",
  "I named one of my Sims after you, I take care of her, and that's a fact, I bought her an expansion pack!",
  "I put him in a pool and I removed the ladder!",
  "I've got rhymes to spit, I've got drugs to quit!",
  "Don't you touch my ladder!",
  "I've got love to give, I've got life to live!",
  "I've got money to burn, I've got ferns to return!",
  "I've got crimes to fight, I've got wrongs to right!",
  "I've got goods to price, I've got jewels to heist!",
  "I've got girls to kiss, I've got planes to miss!",
  "I am super, mega, ultra busy everyday!",
  "I'm not strong enough just to let him out that pool yet; that's not a metaphor, I just don't know how to do it!",
  "Hey, I don't work here, but if I did I would not save your kid!",
  "Just kicking a ball down the street, I give it too much juice and it flies over the fence of my local NASA compound, just bear with me!",

  // DELTARUNE
  "ARE YOU THERE? ARE WE CONNECTED?",
  "No one can choose who they are in this world!",
  "I think this closet's, uh... Broken!",
  "A castle...? Why the hell is there a castle inside a supply closet...?",
  "Damn, didn't get to impale myself!",
  "Perpetuate the cycle of existence?",
  "You have failed. They have poisoned you with their sentimentality!",
  "I can do anything!",
  "Don't forget, I'm with you in the dark!",
  "You... you said I could trust you!! You said you were a GAMER!!!",
  "I was simply relaxing in Kris's spacious Pants Hole!",
  "Want to buy 400 bagels? Only $80!",
  "Stop Everything! Kris Get The Banana! Potassium!",
  "OK There's Nothing Wrong With Him He's Just Annoying!",
  "I USED TO BE NOTHING BUT THE E_MAIL GUY, NOW I'M THE [[It Burns! Ow! Stop! Help Me! It Burns!]] GUY!",
  "I'M A SALESMAN , I WAS NEVER IN IT FOR THE MONEY!!!",
  "CONGRULATIONS YOU ARE THE 100th VISITOR!!! CLICK HERE TO [Die]",
  "It's now time for our feature presentation! (Feacher)",
  "Coming straight from YOUR house!",
  "He's GROOVY and NEVER glooby!",
  "You can't get this from an EGG!",
  "Raise up your bat for the burning fight!",
  "HOW THE WHAT THE MAMA WHAT THE HECK THE HECK HEY HEY WOH WHAT THE HECK WOAH WHAT'S WOAH MAMA MIA HEY WHAT'S MA MAMMA-",
  "THEN WHY DIDN'T YOU SAY SOMETHING EARLIER!?",
  "I'm starting to lose track of the time. Has it been days? Hours? If someone told me it's been years, I might believe them...",
  "These birds are pissing me off. I'm the original                                                               Starwalker"
];
const uncommonSplashes = [
  // The Owl House Luz
  "If I die here, my mom's gonna kill me!",
  "No! My weak nerd arms!",
  "I hate everything you're saying right now!",
  "Expecto... flying? Magicus... escapicus!",
  "Us weirdos have to stick together!",
  "I am Luz, the human, warrior of peace. Now eat this, sucker!",
  "I may be your abomination, but you're my a‐mom‐ination!",
  "Viral fame is a worthy pursuit!",
  "Your cat would never eat you if it got the chance!",
  "Chemtrails are real‐",
  "This is my paying attention face!",
  "I'm not good under pressure!",
  "I've been caught! Pretend to be a book!",
  "My, your hair is looking greasy. And your kids... they're as hideous as ever!",
  "Don't you dare insult shipping in my presence!",
  "Amity! Oh Cramity!",
  "From the humblest of beginnings, a hero will rise!",
  "This mama is ready for trauma!",
  "Why is this memory full of eggs?!",
  "Woo! Teamwork baby!",
  "I'll be your fearless champion!",
  "This one says, witch with a dark side! But this one says, I'm an otter... with a dark side!",
  "NOOOO! I'm lactose intolerant!",
  "You going soft on me, Blight?",
  "You're not coming from a place of intellectual honesty, so debating you would be pointless!",
  "What happens in the montage stays in the montage!",
  "Aaand scoop!",
  "Talk to the glyph, witch!",
  "Buddy, let me tell you a little something about fan fiction!",
  "I'm calling applesauce on this business baloney!",
  "Luz, you fool!",
  "This environment is not conducive to learning. It's conducive to death!",
  "You little rat!",
  "I do stupid things around you too, Amity...",
  "Thank you, little mouse. I hope you and I can become good friends!",
  "If he's not happy, I'll never make my way into Amity's heart. I mean, make a portal back home. Uh, we have to go!",
  "Can tell me how to ask out a cotton-candy haired goddess?",
  "Amity's smart, cool, and classy. Asking her out should be breathtaking! Emotional! And real! ",
  "In the tunnel of love, I thought, Amity's too cool for this...",
  "Amity Blight, do you wanna go out with me?",
  "Whoa... it's like I have snakes for arms...",
  "If I ate the portal key, would I return to the human realm?",
  "Little mouse, owl house, frilly blouse, boop!",
  "Amity! I'm so glad my awesome girlfriend is okay!",
  "Aw! Amity, you're the sweet potato!",
  "Yes! I am a crab maiden!",
  "Destiny? Balderdash!",
  "Not judging a book by its cover is a baby rule even babies know!",
  "Whoops, got a case of the ole jelly legs. I'll catch up.",
  "I can't wait to pick flowers with you!",
  "I'd bet dollars to doughnuts that he can't speak to the Titan!",
  "Woah, you're right. I would say all that!",
  "Oh, crikey!",
  "The only thing I've ever really wanted… was to be understood!",

  // The Owl House Amity
  "Wow, you're so unnoticeable I almost rolled into you!",
  "I know you're in there! What are you?! Who are you?! I WANT ANSWERS!!",
  "Show me what you got, human!",
  "Say it! Say you're not a witch!",
  "Human, do you see me going to the Owl Shack and bugging you while you... fry up owls?",
  "So, you two go to the same school now, that doesn't change anything...",
  "If that bird tube ever talks to me again, I'm going to destroy it!",
  "I don't think you're ready, but we're literally out of time!",
  "Uh, you look nice. Strange, but... nice!",
  "Well, then, if that's settled, may I have this dance?",
  "I grew up. When will you?",
  "This is School, and you go here now, with uh- me... I've been talking for too long!",
  "Yes, I can help...! With what, exactly?",
  "Me, on a team- with you? Running around in- cute uniforms- sweating?- I gotta go!",
  "Pfft- I'm fine, hahaha! Wh- Who's Amity?",
  "Oh... wow, sports!",
  "Stay away from MY LUZ!",
  "No, you're gonna listen to me for once!",
  "Let my friends back into Hexside, or else your precious investors will watch me rip this thing apart bit. by. bit.",
  "Being around you, it makes me do stupid things and I wish it didn't!",
  "I'm thinking things I've never thought before. I'm feeling things I never used to feel!",
  "Don't worry, you always have a way of sneaking into people's hearts...",
  "Uh- okay- good to see you! Farewell forever! Why did I do that? Why did I do that? Why did I do that? Why did I do that???",
  "Yeah heh house demons... get like that after a... couple thousand years...",
  "Yeah, this was stupid. I mean, us? Dating? Heh. That's stupid, right?",
  "DO YOU WANT TO GO OUT WITH ME???",
  "YES!!!",
  "Today, I'll show Luz that I am an awesome girlfriend!",
  "Well we can't afford to mess this up. Luz is counting on me! I mean, us!",
  "He is a lot... scrawnier than I imagined...",
  "Hola, batata!",
  "I just want to keep my girlfriend from being sent to the Conformatorium... again!",
  "I have a problem and it could distract us all day!",
  "I'm making my own choices from now on!",
  "To connect with a Palisman, you need to express your deepest wish!",

  // The Owl House Hooty
  "Hoot hoot, password please!",
  "Alright, alright! Geez! You never want to have any fun! Ow! Hoot!",
  "If you want the answer that you seek, solve my riddle within a week!",
  "That rain is getting closer to my precious stucco!",
  "No, let her try. It'll be funny!",
  "Hello? Hoot? I'm on the floor. It's cold!",
  "Finally I get to be a part of something!",
  "I don't need a babysitter, I'm a big boy house!",
  "Finally someone to listen to my stories! Okay, one time, a sparrow flew into my mouth, and then I... Hey...",
  "By the power of moonlight, I have risen.!",
  "Hey, I'm a refined taste!",
  "Is the room spinning or is it just me? Ah. Just a little house humor!",
  "I'm just glad I was included!",
  "Hey, you wanna hear about MY night???",
  "We can talk for hours, and hours, and hours, and hours...",
  "I'm 20% mucus, but don't let that stop you. C'mon, I have so many hard‐to‐reach spots that need swabbing!",
  "Sweet moves, little dude!",
  "I forget I'm here too... boop!",
  "I chew insects. I turn them into mush!",
  "My beef is insects. They're what I eat!",
  "All I know is, you taught me, and I turned out just fine!",
  "It's MY birthday!",
  "Wow, this is incredible! It's so real! You got yourself a deal!",
  "You'll never understand what we've been through together! Never! Never!",
  "I will be haunted by my actions forever. Hoot hoot!",
  "Hey! Guess what's been in my mouth that I'm about to throw up! THE MAIL!",
  "Oh, a fly! Talk to me, talk to me!",
  "Yep. Hooty and fly. Together forever. You and me. Every single day!",
  "Now I know what friendship taste like. Yum. Taste like a bug!",
  "Maybe I can help! I'm pretty good at getting stuck inside people's heads!",
  "My first word was Hoot! My second word was hoot hoot!",
  "Here's a song I wrote! Bored bored bored, bored bored bored!",
  "Here a hoot, there a hoot, somewhere else a hoot hoot, hooty-hoot hoot!",
  "Hoot hoot, Luz! Time to fill up that darling little head of yours with... Mm-hmm. Delicious knowledge!",
  "YOU WANNA HEAR MY WORST NIGHTMARE???",
  "Hoot-hoot! Guess who found a special friend in the forest! It was me. Hoot!",
  "You gals ready to hoot?",
  "I’m an unbiased participant, hoot hoot!",
  "Sleepwalking... sleepwalking... Sleep-hooting!",
  "Hiya, Lilith! Peek-a-hoot!",
  "Sorry! Eda doesn't like trespassers, but I'm always here to make new friends! Hoot! ",
  "Look at me! I'm a person now. Wobbly, wobbly! Ooh, blackout! Hoot hoot!",
  "Hoot hoot! Bye, friend! Ooh! I feel like dancing! Hoot!",
  "The roughhousing was fun, but I like this part of our playdates even better...",
  "Who are you? This is my territory! Ah!!!",
  "Wait a minute. Who are you? I'm freaking out!",
  "A good friend would respect her wishes, but a better friend would help no matter what!",
  "No witch is an island. Now face my wrath!",
  "Every friendship comes with its ups and downs. Right, best friend?",
  "Toot toot! The Hexside train is a-coming! Chugga-chugga!",
  "A fresh cup of tea for my favorite cup of tea. That's you!",
  "Ah, to die in your arms. Avenge me!",
  "Yeah! I'm a house of principles! You're asking me to lie? Hootrageous!",
  "Porta-Hooty! Reporting for Hooty!",
  "Ha! I've seen better graffiti. I've got better graffiti on me!",
  "More running, less stopping!",
  "Is this what regret feels like? I HATE IT!",
  "Special delivery! PAIN!",
  "Fear not, maiden. Hooty, the guardian owl of Ga'Hoot, has protected you once more! Ga'Hoot!",
  "LEAN ON ME!!!",
  "Sounds like our little demon is becoming a de-MAN!",
  "DO NOT INTERRUPT!",
  "DON'T YOU TALK ABOUT MY MOTHER!!!",
  "Well your dance was offensive, and your attempt to spin a cocoon was just… sad!",
  "You... are you!",
  "The blood tests were inconclusive. We don’t really know what you are!",
  "The only real answer is inside your heart!",
  "IT WAS SUPPOSED TO BE A CRUMBLE!!!",
  "YUP! One bite will put you to sleep for hours!",
  "I suppose I'm just attuned to other people's emotions!",
  "OUT! OUT, VILE OWL! RID THIS HOUSE OF THYSELF! NEVER SHALL I CURSE THIS HOME WITH MY ODIOUS PRESENCE AGAIN!",
  "They’re adorable, and deserve all the happiness!",
  "Whoopsie! Hope that was junk mail!",
  "I can't wait to share parenting tips!",
  "Witch, this is peak of Mount Romance!",
  "Law is meaningless! Stealing is legal now!",
  "I AM YOUR GOD!!!",
  "Inopportune interruption, eh? I'LL HANDLE THIS!",
  "Eda! Special delivery from a secret admirer!",
  "I will protect these silly children with my life!",
  "Where's your other arm???",
  "Yeah. That dude is straight up evil!",
  "Tell Lulu... how brave I was!",
  "HE'S TRICKING YOU! ATTACK PLAN ACTIVATED!",
  "This is just a trick to get me to wear clothes. Well, it WON'T WORK!",
  "Sequestered at a darkness like unto death, the dulcet tones of an angel wakes me. Be it you? Lulu?",

  // BFDI 
  "Woody! There’s a life out there to enjoy, so enjoy it!",
  "Um, Pin...? Wrong finger!",
  "Well, I guess it ALL WORKS OUT!",
  "You know, when you fall into a bottomless pit, you die of starvation!",
  "But this game doesn't even have points!",
  "Watching clouds, huh? You seem pretty bored. Let's go do something fun, like jumping off a cliff!",
  "Ah! Get away, get away before Bubble stabs us!",
  "Blue skidoo, you can too!",
  "Oh no! Speaker just killed the Cheese Orb!",
  "Get me outta this thing!!",
  "Everyone knows host is synonymous with friend!",
  "I can with confidence, assure you you're unlikable and likely to end up all alone and sad!",
  "You need a heroic leader like ME!",
  "What?! That's CRAZY!",
  "I think Leafy deserves the death penalty!",
  "Pointypointypointy! My point is sharp and pointy!!",
  "GRRRRRRRRR, THAT'S IT!!!",
  "Not as good as my point! ;)",
  "Catch! Thaaaanks!~",
  "Leaves, Apple, Kite, House, Nest, Egg! Egg! Egg, Egg, Egg, WHYARETHERESOMANYEGGS?! Toilet!",
  "There are no words in this universe that can describe how unamused I am!",
  "Two Win Tokens! I was so good! I got voted out with both of them!",
  "That's weird, do I taste peanut butter?",
  "Oh, hello, Coiny! It's good to see that you're finally where you belong!",
  "I always thought you were WELL-READ!",
  "Yeah, I know, she was so surprised!",
  "LEAK!",
  "Wow, Needle, she's such a fast runner",
  "Making a cake without recipes is almost as bas as making a cake with two metal balls!",
  "But don't you wanna win and get dream island? I do!",
  "When I win, there will be a big sign saying PENISLAND all spaces no caps!",
  "Woah, I'm the stupid one?",
  "I have to carry Match, and I know she's gaining weight!",
  "Crying is for wimps!",
  "Oh no Firey, you lit my fuse!",
  "I would barf if you won dream island!",
  "Wait, I think that's a maroon ball!",
  "Oh no! I'm drowning!",
  "Bonus points? A mini version of dream island? A previously eliminated contestant? A dead body? Hmm, a barf bag and a taco?",
  "C'mon Ice Cube, let's get first!",
  "Well, they open the lid for 5 minutes every day! That will be our opportunity for escape!",
  "Huh? Oh no, what happened to the big dipper?",
  "I don't wanna jump, why don't you jump?",
  "Oh my gardener!",
  "Oh my tree!",
  "Oh my pin factory!",
  "Hurry up, we have to get back to the execution!",
  "I don't have a favourite number, I really don't!",
  "Oh boy, are we getting more salt and vinegar?",
  "Maybe Teardrop did care, but just didn't say anything because, ya'know, she can't?",
  "I'll bring you back Robot Flower...",
  "Tennis Balls aren't the only ones with lines!",
  "I have a tattoo!",
  "I am the new Coiny!",
  "I just know I'm going to win!",
  "I just know I'm going to lose!",
  "I'm... I'M GONNA KILL YOU!",
  "This is the worst day of my life!",
  "No! You can't eliminate me, I'm like the star of the show!",
  "I'm a dictionary, and you'd better believe it!",
  "Heehee! That tickles!",
  "Team Ice Cube all the way yay!",
  "Yoylecake!",
  "Pin! Believe in the Loser in you!",
  "I was forgotten about! I was dead, and no one recovered me for a year!",
  "I have a job? I was just collecting!",
  "I still get all your items!",
  "Aw, seriously?",
  "No!",
  "Firey Jr, there's no one quite like you!",
  "Poopy mayonnaise!",
  "Wait let's think about this!",
  "Which is???",
  "I hate you!",
  "Those numbers are all morons!",
  "I really did win, didn't I?",
  "How can I trust you to do the challenge if you can't even fold paper correctly?",
  "Get digging, the ingredients are probably underground!",
  "When I like being something, it's because I got to decide it for myself! Like my periwinkality! And my... girl-ness!",
  "There isn't enough room up here!",
  "I own a steakhouse chain!",
  "How do I keep ending up in the bottom 2? I'm the leader of my team!",
  "I'm Grassy!",
  "I want revenge!",
  "I want- to be listened to!",
  "Can i be part of- the truce- too?",
  "So to clarify, that's the first contest of the battle for BFDI?",
  "I've found my next adventure!",
  "I have a scribble, stop bragging!",
  "You're a loser, but you're my loser!",
  "Will you play toss the dirt with me?",
  "She's been disarmed!",
  "I've always been green!",
  "See, what Match wants, Match is gonna get!",
  "I nailed it!",
  "Don't call me Needy!",
  "Wait, you don't know? My legal name is actually Ben!",
  "Shut up and get in the van!",
  "Saw through me, yeah yeah yeah, kill me quick, yeah yeah yeah, so we can win the contest, so we can win the contest!",
  "Whatever, you win some, you lose some!",
  "Pillows don't have hearts, and I'm not your friend!",
  "This sucks- ccessfully sums us up as a team! Great name?",
  "I am pretty forgettable!",
  "I'd suggest Gelatin's steakhouse! But Gelatin's dead!",
  "Stop that!",
  "I love prizes!",
  "Our team has now prevented 0.00 deaths!",
  "Vote for me or I'll crush you!",
  "YOU WILL REGRET THIS!",
  "Buleh!",
  "You do like yoyleberries, don't you FSB!",
  "I don't hEIGHT this crEIGHTs trEIGHTs! I rEIGHT it a solid EIGHT out of EIGHT!",
  "No one tells me what to do!",
  "I like to skydive, and play ping pong and table tennis!",
  "I like to tightrope walk, and fly in balloons, and fly in planes, sail airplanes, and-",
  "My stapler instincts made me do it!",
  "Vegetables are good for you, and grass is basically vegetables right?",
  "A true winner does his research!",
  "Mechanical minds stick together!",
  "I'd rather not have my name in the team name actually!",
  "AaaWaHAhahAHHahhw! Ah!",
  "So yeah, buy now!",
  "You don't know anything, you're purple!",
  "We had to sell it because of budget cuts!",
  "What's stopping me from eliminating you!",
  "X? What's wrong? You look depressed!",
  "If you don't like it, you can just screech me!",
  "We can finally start the battle for the power of TwooooooOOOOO!",
  "Not my cheesecake!",
  "Nope you literally can't!",
  "Well, why don't you grab him? With your arms?",
  "Don't you wanna battle to win a prize?",
  "You're orange!",
  "Oh my tree!"
];
const rareSplashes = [
  // Favourite Media
  "Watch Adventure Time!",
  "Watch Avatar!",
  "Watch Ben 10!",
  "Watch BFDI!",
  "Watch Gravity Falls!",
  "Watch (HFJ)ONE!",
  "Watch The Owl House!!!!",
  "Watch Steven Universe!",
  "Play Bloons!",
  "Play DELTARUNE!",
  "Play Inscryption!",
  "Play Lethal Company!",
  "Play Minecraft!",
  "Play Portal 2!",
  "Play Slime Rancher 2!",
  "Play Sonic Frontiers!",
  "Play Sonic Racing: Crossworlds!",
  "Play Stanley Parable!",
  "Play UNDERTALE!",
  "Play Webfishing!",
  "Listen to CHVRCHES!",
  "Listen to Cults!",
  "Listen to the DELTARUNE OST!",
  "Listen to Jack Stauber!",
  "Listen to Lemon Demon!",
  "Listen to the Sonic OST!",
  "Listen to Teenage Joans!",
  "Listen to Tom Cardy!",
  "Listen to the UNDERTALE OST!"
];
const secretSplashes = [
  // Grimbly Garden
  "Freeing Graham Bling is probably a poor choice!",
  "Artemis is not to be trusted!",
  "Prism packets are quite tasty!",
  "Don't trust Terralink with your mind!",
  "Nexasun makes quality computers!",
  "Has faced less lawsuits than Sandsol!",
  "Verditen is destined to form!",
  "Donate all your plexus!",
  "Only 6 spectra glyphs to collect!",
  "Only 6 dungeon keys to collect!",
  "Lacey is one lucky gal!",
  "The confusthing is quite confusing!",
  "The legendary grimblade is...",
  "You can trust the mysterious trader! I think!",
  "Destroy the beacon and free the innocent grimblies!",
  "Ol' Tippsly's back at it again!",
  "Atlas may be deceived!",
  "Plants dance to the songs of Synthia!",
  "Kaiya's pretty drippy!",
  "Beware of Draven!",
  "Haha, Esmerelda you are banging my antagonist!",
  "Sterling's backstory is full of tragedy and heartbreak!",

  // Rouge the Bat says THINGS... (The Rest)
  "I love Dasani!",
  "All of the world's water is mine to keep!",
  "All the words-",
  "All of the oxygen is mine to keep!",
  "All the gems-",
  "All the Maria is mine to keep!",
  "All of the gems is world to keep!",
  "the world's suus",
  "All my suus is world to keep!",
  "All your creases are mine to keep!",
  "The folds of your- yes!",
  "All of the backwards is sdrawkcab",
  "All these orbs are mine to keep!",
  "Allof garden!",
  "All of these sins are mine to bear!",
  "All of the LOUD!!",
  "All of the oh my god oh my god oh my god oh the god",
  "All of the religion is mine to worship!",
  "All of the victory is mine to have!",
  "All of the lights!",
  "All of the levels are mine to select!",
  "You're like my coolest friend!",
  "First it said my full name and address, thinking this was just a glitch I kept playing.",
  "Daddy is not done speaking!",
  "All of the stillborn mpreg BakuDeku crying art is mine to keep!",
  "All of the videos are mine to make!"
];

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