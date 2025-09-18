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


// Position Draggables
const isMobile = window.innerWidth <= 750;
function positionDraggables() {
  const draggables = document.querySelectorAll('.draggable');
  const pinRow = document.getElementById("pinRow");
  const pinOpen = pinRow && pinRow.style.display !== "none";

  const startTop = window.innerHeight * (pinOpen ? 0.58 : 0.48);
  const spacing = 10;
  const sideOffset = 2;

  let topRightOffset = startTop;
  let topLeftOffset = startTop;

  draggables.forEach(box => {
    if (box.style.display !== 'none') {
      if (isMobile || box.dataset.moved !== "true") {
        if(box.dataset.side == "right") {
          box.style.top = `${topRightOffset}px`;
          box.style.left = 'auto';
          box.style.right = `${sideOffset}%`;


          topRightOffset += box.offsetHeight + spacing;
        }
        if(box.dataset.side == "left") {
          box.style.top = `${topLeftOffset}px`;
          box.style.left = `${sideOffset}%`;
          box.style.right = 'auto';


          topLeftOffset += box.offsetHeight + spacing;
        }
      }
    }
  });
}


// Paragraph Button
function textButtonPress(textId, draggable) {
  var moreText = document.getElementById(textId);
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
  
    if(draggable){
      const box = document.getElementById(textId);
      box.style.display = 'block';
      moreText.dataset.moved = "false";
      positionDraggables();
    }
  } else {
    moreText.style.display = "none";

    if(draggable){
      const box = document.getElementById(textId);
      box.style.display = 'none';
      moreText.dataset.moved = "false";
      positionDraggables();
    }
  }
}
