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
  const draggables = document.querySelectorAll('.draggable, .non-draggable');

  const pinRow = document.getElementById("pinRow");
  const blogMCRow = document.getElementById("blogMCRow");
  const settingsRow = document.getElementById("settingsRow");
  const mediaRow = document.getElementById("mediaRow");
  const pinOpen = pinRow && pinRow.style.display !== "none";
  const blogMCOpen = blogMCRow && blogMCRow.style.display !== "none";
  const settingsOpen = settingsRow && settingsRow.style.display !== "none";
  const mediaOpen = mediaRow && mediaRow.style.display !== "none";

  let baseTop = window.innerHeight * 0.48;
  if (pinOpen || blogMCOpen) baseTop = window.innerHeight * 0.58;
  if (settingsOpen && (pinOpen || blogMCOpen)) baseTop = window.innerHeight * 0.68;
  else if (settingsOpen) baseTop = window.innerHeight * 0.58;
  if (mediaOpen) baseTop += window.innerHeight * 0.8;


  const spacing = 10;
  const sideOffset = 2;

  let topRightOffset = baseTop;
  let topLeftOffset = baseTop;
  let topCenterOffset = baseTop;

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

        if(box.dataset.side == "center") {
          const centerOffset = window.innerHeight * 0.05;
          box.style.top = `${topCenterOffset - centerOffset}px`;
          box.style.left = `${sideOffset}%`;
          box.style.right = 'auto';
          topCenterOffset += box.offsetHeight + spacing;
        }
      }
    }
  });
}


// Paragraph Button
function textButtonPress(textId, draggable) {
  var moreText = document.getElementById(textId);
  if (moreText.style.display === "none" || moreText.style.display === "") {
  
    if(textId === "pinRow" || textId === "blogMCRow" || textId === "settingsRow" || textId === "mediaRow") {
      moreText.style.display = "flex";
    }
    else {
      moreText.style.display = "inline";
    }

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
  updateSettingsRowMargin();
}


// Settings Row
function updateSettingsRowMargin() {
    const pinRow = document.getElementById("pinRow");
    const settingsRow = document.getElementById("settingsRow");

    if (!settingsRow) return;

    if (pinRow && pinRow.style.display !== "none") {
        settingsRow.style.marginTop = "-2vw";
    } else {
        settingsRow.style.marginTop = "0px";
    }
}


// Close Sections
function closeAllBlogs() {
    const blogs = ['blogMainText', 'blogMCText', 'mcTabs'];
    const rows = ['blogMCRow']; 
    blogs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
        el.dataset.moved = "false";
    });
    rows.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    positionDraggables();
}





// Draggables
document.querySelectorAll(".draggable").forEach((element) => {
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;

  // Click Draggable
  element.addEventListener('mousedown', (event) => {
  isDragging = true;
  lastX = event.clientX;
  lastY = event.clientY;
  element.style.cursor = "grabbing";
  document.body.style.userSelect = "none";

  const computed = window.getComputedStyle(element);
  const left = parseInt(computed.left, 10);
  const right = parseInt(computed.right, 10);

  if (!isNaN(left) && left < window.innerWidth / 2) {
    element.dataset.dragFrom = "left";
  } else {
    element.dataset.dragFrom = "right";
  }

  element.dataset.moved = "true";
  positionDraggables();
});


  // Drag Draggable
  document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - lastX;
    const deltaY = event.clientY - lastY;

    const style = window.getComputedStyle(element);
    let elementX, elementY;

    if (element.dataset.dragFrom === "right") {
      elementX = parseInt(style.getPropertyValue('right'));
      element.style.right = `${elementX - deltaX}px`;
    } else {
      elementX = parseInt(style.getPropertyValue('left'));
      element.style.left = `${elementX + deltaX}px`;
    }

    elementY = parseInt(style.getPropertyValue('top'));
    element.style.top = `${elementY + deltaY}px`;

    lastX = event.clientX;
    lastY = event.clientY;

    element.dataset.moved = "true";
  });

  // Unlick Draggable
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      element.style.cursor = "grab";
      document.body.style.userSelect = "auto";
    }
  });
});
