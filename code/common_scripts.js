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
