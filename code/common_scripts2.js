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
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
function positionDraggables() {
  const draggables = document.querySelectorAll('.draggable');
  const startTop = window.innerHeight * 0.58;
  const spacing = 10;
  const rightOffset = 2;

  let topOffset = startTop;

  draggables.forEach(box => {
    if (box.style.display !== 'none') {
      if (!isTouchDevice || box.dataset.moved !== "true") {
        box.style.top = `${topOffset}px`;
        box.style.right = `${rightOffset}%`;
        box.style.left = 'auto';

        topOffset += box.offsetHeight + spacing;
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